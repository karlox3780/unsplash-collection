/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            },
            {
                hostname: 'plus.unsplash.com'
            }
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/searchPage',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
