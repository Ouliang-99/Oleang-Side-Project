/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brown: {
          100: "#F9F8F6",
          200: "#EFEEEB",
          300: "#DAD6D1",
          400: "#75716B",
        },
      },
    },
  },
  plugins: [],
};
