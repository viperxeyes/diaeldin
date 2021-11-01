// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Calibre: ["Calibre"],
      SFMono: ["SFMono"],
    },
    extend: {
      colors: {
        gray: {
          900: "#1e2124",
          850: "#282b30",
          800: "#2f3136",
          700: "#36393f",
          600: "#424549",
        },
      },
      backgroundImage: {
        discordClone: "url('./images/discordClone.png')",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
    fill: ["hover", "focus"],
    direction: ["even", "odd"],
  },
  plugins: [require("tailwind-scrollbar")],
};
