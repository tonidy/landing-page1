module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a2e',
        accent: '#e94560',
        bg: '#f5f6fa',
        darkbg: '#18181b',
      },
    },
  },
  plugins: [],
};
