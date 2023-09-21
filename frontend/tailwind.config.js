/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open-Sans", "sans-serif"],
    },
    extend: {},
    // colors
    colors: {
      gradient: {
        yellow: {
          1: "FFD43B",
          2: "9A6352",
        },
      },
      transparent: "rgba(0,0,0,0)",
      white: "#fff",
      black: "#000",
      background: {
        DEFAULT: "#121212",
        light: "#222222",
      },
      additional: {
        DEFAULT: "#5f3dc4",
      },
      primary: {
        DEFAULT: "#ffd43b", // DEFAULT is between 500 and 600
        100: "#fffbeb",
        200: "#fff2c4",
        300: "#ffea9d",
        400: "#ffe176",
        500: "#ffd84f",
        600: "#e6bf35",
        700: "#b39429",
        800: "#806a1e",
        900: "#4c4012",
        1000: "#191506",
      },
      gray: {
        100: "#f8f9fa",
        200: "#e9e9ea",
        300: "#bcbebf",
        400: "#909294",
        500: "#646669",
        600: "#373b3e",
        700: "#1e2125",
        800: "#171a1d",
        900: "#111315",
        1000: "#0a0b0c",
        1100: "#030404",
      },
    },
    // spacing
    spacing: {
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.5rem",
      2: "0.75rem",
      2.5: "1rem",
      3: "1.5rem",
      3.5: "3rem",
      4: "4rem",
      4.5: "5rem",
      5: "6rem",
      5.5: "8rem",
      6: "10rem",
      6.5: "12rem",
      7: "16rem",
      7.5: "20rem",
      8: "28rem",
      8.5: "36rem",
      9: "52rem",
      9.5: "64rem",
    },
    // font sizes
    fontSize: {
      xxs: ["0.625rem", "1.7"],
      xs: ["0.75rem", "1.6"],
      sm: ["0.875rem", "1.6"],
      md: ["1rem", "1.6"],
      lg: ["1.125rem", "1.5"],
      base: ["1.25rem", "1.5"], //20px
      "1xl": ["1.5rem", "1.5"],
      "2xl": ["1.875rem", "1.4"],
      "3xl": ["2.25rem", "1.4"],
      "4xl": ["2.75rem", "1.3"],
      "5xl": ["3.25rem", "1.2"],
      "6xl": ["3.875rem", "1.2"],
      "7xl": ["4.625rem", "1.2"],
      "8xl": ["5.375rem", "1.15"],
      "9xl": ["6.125rem", "1.1"],
    },

    borderRadius: {
      none: "0",
      sm: ".625rem",
      DEFAULT: "1.25rem", // 20px
      lg: "1.875rem",
      xl: "3.125rem",
      full: "999999px",
    },
  },
  plugins: [],
};
