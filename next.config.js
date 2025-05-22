/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode
  reactStrictMode: true,
  
  // Image domains
  images: {
    domains: ['portfolio-website-murex-theta.vercel.app'],
    unoptimized: true,
  },
  
  // TypeScript and ESLint config
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features
  experimental: {
    appDir: true,
    serverActions: true,
  }
};

module.exports = nextConfig;
