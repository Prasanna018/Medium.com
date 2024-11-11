/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'post-bg': "url('./src/assests/andrew-neel-cckf4TsHAuw-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}

