/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
          "res.cloudinary.com"
      ]
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig