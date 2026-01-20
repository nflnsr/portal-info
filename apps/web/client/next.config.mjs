/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    crossOrigin: 'anonymous',
    transpilePackages: ["@repo/dto", "@repo/web-utils", "@repo/api", "@repo/ui"]
};

export default nextConfig;
