/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        black: "hsl(0, 0%, 0%)",
        lightGray: "hsl(0, 0%, 42%)",
        veryLightGray: "hsl(0, 0%, 95%)",
        green: "hsl(118, 71%, 31%)",
      },
      backgroundImage: {
        "headerImg": "url(../assets/Images/Bcg.jpg)"
      },
      height: {
        "imgHeaderHeight" : "85vh"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
