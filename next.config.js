/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: process.env.DISPLAY_IMAGE_HOST,
        },
        ],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
