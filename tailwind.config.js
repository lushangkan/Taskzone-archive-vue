/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme1: {
          "primary": "#63e6be",
          "secondary": "#faa2c1",
          "accent": "#c0eb75",
          "neutral": "#495057",
          "base-100": "#f7fffd",
          "info": "#2789F9",
          "success": "#80D263",
          "warning": "#FFEE4B",
          "error": "#FF6B54",
        }
      },
    ],
  },
}

