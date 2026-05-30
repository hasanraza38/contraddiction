"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch("/api/instagram");
        
        if (!response.ok) {
          throw new Error("Failed to load Instagram posts.");
        }
        
        const data = await response.json();
        setPosts(data.data.slice(0, 6)); // Display latest 6 posts
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="w-full border-b border-[var(--color-border-light)] border-b-[0.5px] bg-[#FFFFFF]">
      <div className="flex justify-between items-center px-6 md:px-16 py-8 border-b border-[var(--color-border-light)] border-b-[0.5px]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Social Chronicle</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Live Feed</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-16 py-20 md:py-32 gap-12">
        <div className="flex flex-col max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] mb-8">@contradictionspk</span>
          <h2 className="font-serif text-[48px] md:text-[72px] text-[var(--color-text-primary)] leading-[1] tracking-tight">
            The Visual <br /> Chronicle
          </h2>
        </div>
        <div className="flex flex-col max-w-sm mb-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] leading-[2] mb-8">
            Explore our latest commissions, material studies, and glimpses into the atelier.
          </p>
          <a 
            href="https://www.instagram.com/contradictionspk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-primary)] hover:text-[var(--color-brand-hover)] transition-colors w-fit border-b border-[var(--color-brand-primary)] pb-2"
          >
            Follow on Instagram 
            <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      {error && (
        <div className="px-6 md:px-16 pb-16">
          <div className="bg-[#FAF7F7] text-[var(--color-brand-primary)] p-8 text-center text-[10px] uppercase tracking-[0.2em] border border-[var(--color-border-light)] border-[0.5px]">
            {error}
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 gap-[4px] px-[4px] pb-[4px] md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-[#FAF7F7] animate-pulse border border-[var(--color-border-light)] border-[0.5px]" />
          ))}
        </div>
      ) : (
        !error && posts.length > 0 && (
          <div className="grid grid-cols-1 gap-[4px] px-[4px] pb-[4px] md:grid-cols-3">
            {posts.map((post) => {
              const imageUrl = post.media_type === "VIDEO" && post.thumbnail_url 
                ? post.thumbnail_url 
                : post.media_url;

              return (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group border border-[var(--color-brand-primary)] border-[0.5px]"
                >
                  <div className="w-full aspect-square relative overflow-hidden bg-[#FAF7F7]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={imageUrl} 
                      alt={post.caption?.substring(0, 50) || "Instagram post"} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Red tint overlay */}
                    <div className="absolute inset-0 bg-[var(--color-brand-primary)] mix-blend-multiply opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                    {/* Hover red slide in at 8% */}
                    <div className="absolute inset-0 bg-[var(--color-brand-primary)] opacity-0 group-hover:opacity-[0.08] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-[10px] uppercase tracking-[0.1em] leading-[1.8] text-white/90 line-clamp-3 mb-6">
                          {post.caption || "View on Instagram"}
                        </p>
                        <div className="flex gap-6 items-center text-white border-t border-white/20 pt-4">
                          {post.like_count !== undefined && (
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                              <Heart className="w-3.5 h-3.5 fill-white" />
                              {post.like_count}
                            </div>
                          )}
                          {post.comments_count !== undefined && (
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                              <MessageCircle className="w-3.5 h-3.5 fill-white" />
                              {post.comments_count}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )
      )}
      
      {!loading && !error && posts.length === 0 && (
        <div className="px-6 md:px-16 pb-16">
          <div className="text-center py-16 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-secondary)] border border-[var(--color-border-light)] border-[0.5px]">
            No posts found.
          </div>
        </div>
      )}
    </section>
  );
}
