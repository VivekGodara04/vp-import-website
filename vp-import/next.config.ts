import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // static export — required for Cloudflare Pages (no adapter needed)
  images: {
    unoptimized: true, // next/image optimization needs a server; not used on this static site anyway
  },
};

export default nextConfig;
