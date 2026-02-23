import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Barlow", "sans-serif"]
      },
      boxShadow: {
        flame: "0 0 30px rgba(250, 204, 21, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
