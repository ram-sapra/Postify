/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: "Ubuntu",
    },
    extend: {
      borderRadius: {
        large: "60px",
      },
    },
  },
  plugins: [],
};
