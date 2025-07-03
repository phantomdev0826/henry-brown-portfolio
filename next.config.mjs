/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        domains: ['avatars.githubusercontent.com','static.wixstatic.com','assets-global.website-files.com'],
        
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
}

export default nextConfig
