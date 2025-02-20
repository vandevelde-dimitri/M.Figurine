import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignore les erreurs ESLint sur Vercel
    },
    /* config options here */
    images: {
        domains: ["images.unsplash.com", "plus.unsplash.com"], // replace 'example.com' with your image domain
    },
};

export default nextConfig;
