module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 800: "#454846", "800_01": "#4a4848" },
        green: {
          900: "#027c16",
          A700_01: "#0ba937",
          A700: "#0aa836",
          "900_00": "#01641100",
        },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        white: { A700_01: "#fffcfc", A700_02: "#fefffe", A700: "#ffffff" },
        cyan: { 800: "#0a8596", "700_00": "#00abab00" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#0ba937,#00abab00)",
        gradient1: "linear-gradient(180deg ,#0aa836,#00abab00)",
        gradient2: "linear-gradient(180deg ,#027c16,#01641100)",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
