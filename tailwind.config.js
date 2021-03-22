module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "baby-powder": "#F4F7F0",
      "slate-gray": "#78848E",
      gunmetal: "#252A30",
      copper: "#B57207",
    }),
    fontFamily: {
      body: "Poppins, sans-serif",
    },
    textColor: (theme) => ({
      ...theme("colors"),
      "baby-powder": "#F4F7F0",
      "slate-gray": "#78848E",
      gunmetal: "#252A30",
      copper: "#B57207",
    }),
    extend: {
      backgroundImage: {
        beans: "url('/public/beans.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
