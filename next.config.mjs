// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Add this line
        port: "",
        pathname: "/**", // This will allow any path under via.placeholder.com
      },
    ],
  },
};

export default nextConfig;
