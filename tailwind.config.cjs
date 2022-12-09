/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          '400': '#FFF6ED',
          '500': '#FC881D',
          '600': '#0D0E25'
        }
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        souresanspro: ['Source Sans Pro', 'sans-serif']
      },
      padding: {
        '2/5': '10px',
        '6/5': '25px'
      },
      borderRadius: {
        '100': '100px'
      },
      height: {
        '1000': '1355px'
      },
    },
  },
  plugins: [],
}