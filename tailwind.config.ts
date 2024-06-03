import { color } from "framer-motion";

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'prim' : '#422A03',
      'cream' : '#FFF6E7',
      'emas' : '#CEAA72',
      'brown': '#6F4606',
      'white' : '#FFF2DF' 
    },
    extend: {
      backgroundImage : {
        'half-round' : 'url("/bg-con.png")'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};