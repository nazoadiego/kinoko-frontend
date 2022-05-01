module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-violet': '#8662F9',
        'dark-blue': '#0B021F'
      },
    },
  },
  plugins: [require('daisyui')],
}
