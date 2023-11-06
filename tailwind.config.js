/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
        sm: "10px",
        md: "15px",
        lg: "20px",
        xl: "25px",
        "2xl": "40px",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "input-bg-color": "#F4F4FF",
        "form-t-color": "#090937",
        "form-t-color-06": "#09093799",
        "btn-orange": "#EF6B4A",
        "btn-orange-hover": "#e66342",
      },
    },
    screens: {
      ss: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
