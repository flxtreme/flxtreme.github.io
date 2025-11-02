import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '/'
};

export default nextConfig;
