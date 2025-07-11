module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#232323', // dark grey
        accent: '#e0e0e0', // light grey for highlights
        text: '#ffffff', // pure white for all textt
        highlight: '#ffffff', // white for extra contrast
        gray1: '#333',
        gray2: '#444',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 