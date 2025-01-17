/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: { max: "480px" },
        // @media (max-width:480px) {}
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
        poppins: ["Poppins", "serif"],
      },
      fontWeight: {
        "extra-bold": "800",
      },
    },
  },
  plugins: [],
};
