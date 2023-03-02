/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/123", permanent: true }];
  },
};

module.exports = nextConfig;
