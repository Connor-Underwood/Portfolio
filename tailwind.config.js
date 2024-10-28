module.exports = {
    darkMode: "class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6366f1",
          'main-text': "var(--theme-text)",
          'main-bg': "var(--theme-bg)",
          'secondary-bg': "var(--theme-secondary-bg)"
        },
        fontFamily: {
          'times': ["Times New Roman"]
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
  }
  