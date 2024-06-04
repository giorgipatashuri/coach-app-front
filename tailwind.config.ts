import type { Config } from "tailwindcss";

const colors = {
  black: "#2E3239",
  gray: "#CDCDCD",
  white: "white",
  primary: "#FF9902",
  secondary: "#161D25",
  "bg-color": "#F2F2F5",
  aqua: "#268697",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        textPrimary: "#D8D9DA",
      },
    },
  },
  plugins: [],
};
export default config;
