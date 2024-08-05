/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  async serverRuntimeConfig() {
    return {
      axios: require('axios'),
    };
  },
};
module.exports = nextConfig;
