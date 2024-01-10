/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary": "#1B1C2E",
        chocolate: "#EF6A20",
        chocolate2: "#1B1C2E;",
        "text-color": "#595260",
        "subheading-color": "#b2b1b9",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "text-button": "Montserrat",
        inter: "Inter",
        "icon-list": "'Font Awesome 5 Free'",
      },
    },
    fontSize: {
      smi: "13px",
      xl: "20px",
      mid: "17px",
      "26xl": "45px",
      xs: "12px",
      "3xs": "10px",
      mini: "15px",
      "16": "16px",

      "6xl": "25px",
      "41xl": "60px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
