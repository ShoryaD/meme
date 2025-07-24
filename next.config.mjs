/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  devIndicators: {
    buildActivity: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
