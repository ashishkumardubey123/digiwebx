import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
