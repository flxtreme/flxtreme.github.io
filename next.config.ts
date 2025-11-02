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
  // Add these for GitHub Pages
  basePath: '/flxtreme.github.io',        // replace with your repo name
  assetPrefix: '/flxtreme.github.io/',    // ensures assets load correctly
};

export default nextConfig;
