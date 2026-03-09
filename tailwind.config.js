/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F4EBDD",
          sand: "#AE9377",
          olive: "#6A5C43",
          gold: "#C19862",
          terracotta: "#8E4829",
          rust: "#471D14",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};