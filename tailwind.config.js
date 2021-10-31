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
  indigo: {
    100: "#cfcae2",
    200: "#b7b0d4",
    300: "#9f96c5",
    400: "#877bb7",
    500: "#6f61A8",
    600: "#5d5091",
    700: "#4c4176",
    800: "#3b335c",
    900: "#2b2543",
  },
  cyan: {
    100: "#f0fbfc",
    200: "#ccf1f5",
    300: "#aae8ee",
    400: "#88dfe7",
    500: "#66d6e1",
    600: "#44cdda",
    700: "#25afbb",
    800: "#1e8f99",
    900: "#186f77",
  },
  green: {
    100: "#d1efe6",
    200: "#b3e5d5",
    300: "#95dbc4",
    400: "#76d0b4",
    500: "#58c6a3",
    600: "#3eb590",
    700: "#349878",
    800: "#2a7a60",
    900: "#1f5b48",
  },
  orange: {
    100: "#fae7c7",
    200: "#f6d7a2",
    300: "#f3c77c",
    400: "#efb857",
    500: "#eca832",
    600: "#e09515",
    700: "#bb7d11",
    800: "#95640e",
    900: "#704b04",
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
