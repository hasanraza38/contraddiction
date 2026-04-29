import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/apolloClient";
import { GET_JOURNAL_BY_SLUG, GET_JOURNAL_LIMITED } from "@/graphql/queries";
import { transformJournal, JournalNode } from "@/lib/graphql-types";

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const [articleResponse, relatedResponse] = await Promise.all([
    client.query<{ journal: JournalNode }>({
      query: GET_JOURNAL_BY_SLUG,
      variables: { slug: resolvedParams.slug },
    }),
    client.query<{ journals: { nodes: JournalNode[] } }>({
      query: GET_JOURNAL_LIMITED,
      variables: { first: 3 },
    })
  ]);

  if (articleResponse.error || !articleResponse.data?.journal) {
    notFound();
  }

  const article = transformJournal(articleResponse.data.journal);
  
  const relatedArticles = relatedResponse.data?.journals?.nodes
    .map(transformJournal)
    .filter(a => a.slug !== article.slug)
    .slice(0, 2) || [];

  // 1. Convert block tags to actual newlines before stripping to preserve intended spacing
  let cleanContent = article.content.replace(/<br\s*\/?>/gi, '\n');
  cleanContent = cleanContent.replace(/<\/p>/gi, '\n\n');
  cleanContent = cleanContent.replace(/<p[^>]*>/gi, '');

  // 2. Strip all remaining HTML tags
  cleanContent = cleanContent.replace(/<[^>]+>/g, '');

  // 3. Handle literal escaped backslash-n characters that might be returned by the WP GraphQL API
  cleanContent = cleanContent.replace(/\\n/g, '\n');

  // 4. Decode common HTML entities from the WYSIWYG editor
  cleanContent = cleanContent
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&');

  // 5. Split into paragraphs, clean whitespace, and filter out empties
  const paragraphs = cleanContent.split(/\n\s*\n/).map(p => p.trim()).filter(p => p !== '');
  
  // Use the middle paragraph as a pull quote if there are enough paragraphs
  const pullQuoteIndex = Math.floor(paragraphs.length / 2);

  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] items-center">
      {/* Title Block */}
      <div className="w-full max-w-4xl pt-32 pb-16 px-6 flex flex-col items-center text-center">
        <h1 className="font-serif text-[48px] md:text-[64px] text-[var(--color-text-primary)] leading-[1.1] mb-8">
          {article.title}
        </h1>
        <div className="flex gap-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="w-full border-b border-[var(--color-brand-primary)] border-b-[0.5px] mb-24"></div>

      {/* Body Text */}
      <div className="w-full max-w-[680px] px-6 flex flex-col gap-8 text-[18px] text-[var(--color-text-primary)] leading-[1.9] mb-32">
        {paragraphs.map((p, i) => {
          if (i === pullQuoteIndex && paragraphs.length > 1) {
            return (
              <blockquote key={i} className="my-12 pl-6 md:pl-12 border-l-[2px] border-[var(--color-brand-primary)] font-serif italic text-[24px] md:text-[32px] text-[var(--color-text-primary)] leading-tight">
                {`"${p.trim()}"`}
              </blockquote>
            );
          }
          return <p key={i}>{p.trim()}</p>;
        })}
      </div>

      {/* Footer Tags */}
      {/* <div className="w-full py-16 border-t border-[var(--color-border-light)] border-t-[0.5px] flex justify-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          Filed under: Craft / Objects / Thinking
        </span>
      </div> */}

      {/* Related Articles */}
      <div className="w-full border-t border-[var(--color-border-light)] border-t-[0.5px] bg-[#FAF7F7]">
        <div className="px-6 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px] flex justify-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
            Further Reading
          </span>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
          {relatedArticles.map((rel, i) => (
            <Link 
              key={i}
              href={`/journal/${rel.slug}`}
              className={`flex-1 p-12 md:p-16 flex flex-col group border-b md:border-b-0 border-[var(--color-border-light)] border-b-[0.5px] ${i === 0 ? 'md:border-r border-r-[0.5px]' : ''}`}
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] mb-4">{rel.date}</span>
              <h3 className="font-serif text-[28px] text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                {rel.title}
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] line-clamp-2 mb-8">
                {rel.excerpt}
              </p>
              <span className="mt-auto text-[var(--color-brand-primary)] text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
