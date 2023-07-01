/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com"],
  },
};

module.exports = nextConfig
