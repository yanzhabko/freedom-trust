/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["styles"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
