/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xll: "150px",
      xxl: "180px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      colors: {
        "Adio-blue": "blue",
      },
    },
  },
  plugins: [],
};
