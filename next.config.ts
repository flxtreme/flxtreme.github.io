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
  basePath: '/flxtreme.github.io'
};

export default nextConfig;
