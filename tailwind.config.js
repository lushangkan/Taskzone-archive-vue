/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
      "./src/**/*.{ts,vue,less,jsx,tsx}",
      "./index.html",
      "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // DO NOT CHANGE
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  plugins: [
      require("daisyui"),
      require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: [
      {
        theme1: {
          "primary": "#63e6be",
          "secondary": "#faa2c1",
          "accent": "#c0eb75",
          "neutral": "#495057",
          "base-100": "#fff",
          "info": "#2789F9",
          "success": "#80D263",
          "warning": "#FFEE4B",
          "error": "#FF6B54",
        }
      },
    ],
  },
}

