import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  basePath: "/personal-website",
  assetPrefix: '/personal-website',
  reactStrictMode: true,
};

module.exports = nextConfig;
export default nextConfig;
