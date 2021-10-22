const colors = {
  red: {
    100: "#fdedf3",
    200: "#f7b5ce",
    300: "#f17eaa",
    400: "#ec4686",
    500: "#DF1765",
    600: "#b91353",
    700: "#941042",
    800: "#6f0c32",
    900: "#4a0821",
  },
};

module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: colors,
      borderColor: colors,
      backgroundColor: colors,
      fontFamily: {
        bold: ["Galano Grotesque Bold", "sans-serif"],
        heavy: ["Galano Grotesque Heavy", "sans-serif"],
        sans: ["Galano Grotesque Regular", "sans-serif"],
        semibold: ["Galano Grotesque SemiBold", "sans-serif"],
      },
      boxShadow: {
        "btn-red": "2px 2px 6px 1px rgba(223, 23, 101, 0.49)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// "btn-red": "0 0 5px 2px rgba(223, 23, 101, 0.49)"
