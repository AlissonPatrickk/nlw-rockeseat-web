/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy@3x.png')",
        'game-gradient': 'linear-gradient(100deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 67.88%',
      }
    },
  },
  plugins: [],
}
