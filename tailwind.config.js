

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '25': '8rem', // Define pt-20 as 5rem of padding-top
      },
    },
  },
  plugins: [],
};

