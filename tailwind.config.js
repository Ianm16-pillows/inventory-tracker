/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',   // deep blue
        secondary: '#059669'  // green
      }
    },
  },
  plugins: [],
};
