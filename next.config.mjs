/** @type {import('next').NextConfig} */
const nextConfig = {
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
