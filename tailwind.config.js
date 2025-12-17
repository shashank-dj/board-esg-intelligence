/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F7A6F",     // ESG Green (trustworthy, muted)
        primaryLight: "#E6F4F1",
        accent: "#3FA18C",
        bgsoft: "#F7FBFA",
        textmain: "#0F172A",
        textsub: "#475569",
        borderlight: "#D1E7E2",
      },
    },
  },
  plugins: [],
};
