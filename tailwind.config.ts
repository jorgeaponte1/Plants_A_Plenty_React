import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1600px",
      "h-xs": { raw: "(max-height: 653px)" },
      "h-sm": { raw: "(max-height: 750px)" },
      "h-md": { raw: "(max-height: 950px)" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sansita_swashed: [`var(--font-sansita_swashed)`, "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
