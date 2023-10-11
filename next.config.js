const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port:'',
        pathname: '/profile_images/**',
      },
      {
        protocol: 'https',
        hostname: 'mirror-media.imgix.net',
        port:'',
        pathname: '/publication-images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.mirror-media.xyz',
        port:'',
        pathname: '**',
      },
    ],
  },
})
