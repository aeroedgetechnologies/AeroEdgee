/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(0, 123, 255, 0.7), 0 0 20px rgba(0, 123, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

