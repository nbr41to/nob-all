/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5EEAD4',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // TailWindCSSのResetCSSとMantineの競合を防ぐために無効化
  },
};
