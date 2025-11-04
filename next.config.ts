import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: basePath,
  assetPrefix: basePath,
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;