/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purpleG: "#312783",
        redG: "#b51f1f",
        skyBlue: "#2fa2b6",
        greenG: "#0f7f12",
      },
      backgroundImage: {
        heroBanner: "url('../assets/images/homepage banner.png')",
        aankomendeEvenementen: "url('../assets/images/Aankomende evenementen.png')",
        emojis: "url('../assets/images/emojis.png')",
        tickets: "url('../assets/images/tickets.png')",
      },
    },
  },
  plugins: [],
};
