/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/personal-site",
  assetPrefix: "/personal-site/",
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
