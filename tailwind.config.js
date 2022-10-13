/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
 module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{ts,tsx,js}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("daisyui")],
  theme: {},
};