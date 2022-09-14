{
  import("tailwindcss").Config;
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "new-grid": "repeat(auto-fit, minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
