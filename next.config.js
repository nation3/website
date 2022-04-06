module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/manifesto',
        permanent: false,
      },
    ]
  },
}
