/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    unoptimized: false,
  },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/solar-calculator',
        permanent: true,
      },
      {
        source: '/solar-roi',
        destination: '/solar-calculator',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
