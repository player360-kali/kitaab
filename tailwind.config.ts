import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#18304C",
        grey: "#313131",
        cart: "#FF853A",
      },
      boxShadow: {
        primaryButton: "0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
        navigationButton: "0px 4px 24px 0px rgba(0, 0, 0, 0.16)",
        caruselSlide: "0px 4px 24px 0px rgba(0, 0, 0, 0.16)",
        card: "0px 4px 4px 0px rgba(44, 116, 47, 0.25)",
        categoryCard: "0px 1px 9px 0px rgba(0, 0, 0, 0.11)",
      },
      textColor: {
        title: "#18304C",
        link: "#FF853A",
      },
    },
  },
  plugins: [],
};

export default config;
