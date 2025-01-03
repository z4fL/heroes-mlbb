/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        highlight: "#F9564F",
        "color-base": "#ECE8E1",
        charcoal: "#393E46",
        info: "#01AFDF",
        midnight: "#131A2A",
        "soft-white": "#FFFAFF",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        bebas: ["var(--font-bebas)"],
        tungsten: ["var(--font-tungsten)"],
        dinnext: ["var(--font-dinnext)"],
      },
    },
  },
  plugins: [],
};
