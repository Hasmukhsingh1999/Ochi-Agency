/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Neue-Montreal": ["Neue-Montreal"],
        "Founders-Grotesk": ["Founders-Grotesk"],
      },
    },
  },
  plugins: [],
};
