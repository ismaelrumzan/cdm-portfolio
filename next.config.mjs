/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
