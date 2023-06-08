/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "476px",
      md: "620px",
    },
    extend: {
      maxWidth: {
        "8xl": "2560px",
      },
    },
  },
  plugins: [],
};
