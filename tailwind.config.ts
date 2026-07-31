import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#ffffff",
        brand: {
          purple: "#754CF0",
          teal: "#1EBAEB",
          green: "#4FCD7B",
          coral: "#EB895F",
          amber: "#EE9D28",
        },
      },
    },
  },
  plugins: [],
};
export default config;
