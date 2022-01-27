module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Bossa', 'sans-serif'],
      body: ['UniversalSans', 'sans-serif'],
    },
    extend: {
      colors: {
        n3blue: '#69C9FF',
        n3green: '#88F1BB',
      },
    },
  },
  plugins: [],
}
