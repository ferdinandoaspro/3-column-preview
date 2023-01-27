/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'bright-orange': "hsl(31, 77%, 52%)",
      "dark-cyan": "hsl(184, 100%, 22%)",
      "very-dark-cyan": "hsl(179, 100%, 13%)",
      "transparent-white": "hsla(0, 0%, 100%, 0.75)", // paragraphs //
      "very-light-gray": "hsl(0, 0%, 95%)" // background, headings, buttons //
      },
      fontFamily: {
        "display": "'Big Shoulders Display', cursive", // font weight: 700 //
        "lexend": "'Lexend Deca', sans-serif" //font-weight: 400 //
      }
    }
  },
  plugins: [],
}
