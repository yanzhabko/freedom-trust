import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          md: "30px",
          lg: "30px",
          xl: "50px",
          "2xl": "100px",
          "3xl": "100px",
        },
      },
      screens: {
        sm: "none", // Додайте значення для малих екранів (розмір >= 640px)
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
      },
    },
  },
  plugins: [],
};
export default config;
