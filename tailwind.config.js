/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': '320px', 
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'group-hover'], 
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

