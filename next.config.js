/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/map",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
