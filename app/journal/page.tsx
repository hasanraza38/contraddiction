import Link from "next/link";
import { client } from "@/lib/apolloClient";
import { GET_JOURNALS } from "@/graphql/queries";
import { transformJournal, JournalNode } from "@/lib/graphql-types";

export default async function Journal() {
  const { data } = await client.query<{ journals: { nodes: JournalNode[] } }>({
    query: GET_JOURNALS,
  });

  const articles = data?.journals?.nodes.map(transformJournal) || [];

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-53px)] bg-[#FFFFFF] items-center">
      {/* Header */}
      <div className="w-full py-24 md:py-32 flex justify-center border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <h1 className="font-serif text-[48px] md:text-[64px] text-[var(--color-text-primary)]">
          The Journal
        </h1>
      </div>

      {/* Article List */}
      <div className="w-full max-w-5xl flex flex-col">
        {articles.map((article, i) => (
          <div key={article.id || i} className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px]">
            <Link 
              href={`/journal/${article.slug}`}
              className="flex flex-col md:flex-row items-center py-16 px-6 md:px-0 group hover:bg-[#FAF7F7] transition-colors duration-500"
            >
              {/* Date (Left) */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0 text-left md:text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                  {article.date}
                </span>
              </div>

              {/* Title & Excerpt (Center) */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center px-4 mb-8 md:mb-0">
                <h2 className="font-serif text-[28px] md:text-[32px] text-[var(--color-text-primary)] mb-4 leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 max-w-sm">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Link (Right) */}
              <div className="w-full md:w-1/4 text-left md:text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  Read →
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
