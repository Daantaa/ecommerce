/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: [
          "res.cloudinary.com"
      ]
  }
}

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig