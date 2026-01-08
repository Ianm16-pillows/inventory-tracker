/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E3A8A', // darker blue for headers/buttons
        primaryGreen: '#10B981', // green accents
        lightBlue: '#DBEAFE', // light background
        lightGreen: '#D1FAE5', // light green background
      },
    },
  },
  plugins: [],
};
