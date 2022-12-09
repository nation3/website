module.exports = {
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
        pathname: '/profile_images/**',
      },
      {
        protocol: 'https',
        hostname: 'mirror-media.imgix.net',
        pathname: '/publication-images/**',
      },
    ],
  },
}
