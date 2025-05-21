/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
  // Add other configurations here if needed
}

module.exports = nextConfig
