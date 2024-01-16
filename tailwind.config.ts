import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archia: "Archia",
        varela: ["Varela", ...defaultTheme.fontFamily.serif],
        lato: ["Lato", ...defaultTheme.fontFamily.serif]
      },
      spacing: {
        "104": "26rem",
        "112": "28rem",
        "144": "36rem",
        himg: "550px",
      },
      colors: {
        secondary: "#FD841F",
        primary: "#001253",
        secondary2: "#97c680",
        "background-color": "#EBEBEB",
      },
      animation: {
        fadeOut: "fadeOut 200ms ease-in-out both",
        fadeIn: "fadeIn 200ms ease-in-out both",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: "100",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

