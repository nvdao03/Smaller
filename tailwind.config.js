/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2xl-max": { max: "1536px" },
        "2xl": "1536px",

        "xl-max": { max: "1280px" },
        xl: "1280px",

        "lg-max": { max: "1024px" },
        lg: "1024px",

        "md-max": { max: "768px" },
        md: "768px",

        "sm-max": { max: "640px" },
        sm: "640px",
      },
      keyframes: {
        navbarShow: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        navbarHide: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        overlayShow: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        overlayHide: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        navbarShow: "navbarShow 0.5s ease-in-out",
        navbarHide: "navbarHide 0.5s ease-in-out",
        overlayShow: "overlay 0.5s ease-in-out",
        overlayHide: "overlay 0.5s ease-in-out",
      },
    },
    plugins: [],
  },
};
