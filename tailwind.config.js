module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        btn: "#F6FFA4",
        card: "#B6FFCE",
        border: "#6B7280"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}