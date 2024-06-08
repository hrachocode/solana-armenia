import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['"Inter Tight"', "sans-serif"],
        round: ['"Round Control"', "sans-serif"],
        press: ['"Press Start 2P"', "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        xs: "12px",
      },
      height: {
        "63": "63px",
        "50": "50px",
        "40": "40px",
      },
      width: {
        "40": "40px",
      },
      padding: {
        "8": "8px",
        "15": "15px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "23": "23px",
        "28": "28px",
        "41": "41px",
      },
      borderRadius: {
        sm: "8px",
        xs: "6px",
      },
    },
    colors: {
      "white-1": "#ffffff",
      "white-2": "#ece4f5",
      "white-3": "#B6B6B9",
      "gray-1": "#ffffff4d",
      "gray-2": "#716F75",
      "green-1": "#19fb9b",
      "purple-1": "#9945ff",
      "black-1": "#0b0517",
      "black-2": "#222222",
      "blue-1": "#171223",
      "blue-2": "#2f1569",
      "pink-1": "#f7d9e0",
      "red-1": "#fd2b3d",
      "red-2": "#ff828d",
    },
  },
  plugins: [],
};
export default config;
