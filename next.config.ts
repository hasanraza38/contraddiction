import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'darkgreen-deer-608928.hostingersite.com',
        pathname: '/**', // Matches any path on this domain
      },
    ],
  },
};

export default nextConfig;
