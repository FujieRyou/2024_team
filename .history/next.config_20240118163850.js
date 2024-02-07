/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports={
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
  },
}