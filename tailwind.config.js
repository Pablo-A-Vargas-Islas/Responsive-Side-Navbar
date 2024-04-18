module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        royalblue1: "#144dc1",
        royalblue: {
          "100": "#3b73e8",
          "200": "#144dc1",
          "300": "rgba(59, 115, 232, 0.09)",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(0, 0, 0, 0.1)",
        },
        lightgray: "#d5d5d5",
        whitesmoke: "#eee",
        forestgreen: "#169e24",
      },
      borderRadius: {
        "31xl": "50px",
        "6xl": "25px",
      },
    },
  },
  plugins: [],
};


