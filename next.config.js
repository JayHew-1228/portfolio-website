/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for Vercel
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Add base path if your site is served from a subdirectory
  // basePath: '',
  
  // Add trailing slash for static export
  trailingSlash: true,
  
  // Optional: Enable the experimental app directory
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
