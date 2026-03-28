import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Static export for GoDaddy shared hosting
  trailingSlash: true,        // GoDaddy needs trailing slashes
  images: {
    unoptimized: true,        // Required for static export
  },
};

export default nextConfig;
