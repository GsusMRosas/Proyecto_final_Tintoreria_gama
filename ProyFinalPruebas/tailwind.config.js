/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/global.css",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#223A5C",
        backgroundWhite: "#F5FCFF",
        aquaLine: "#0891b2",
        darkaquaLine: "#155e75",
        backgroundLBlue: "#E2ECF0",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        'bungee': ["Bungee"],
        'alegreyaMedium': ["Alegreya Sans", "italic"]
      }
    },
  },
  plugins: [],
};
