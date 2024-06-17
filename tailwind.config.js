/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '420': '420px',
      },
      boxShadow:{
        custom: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      background: ['active'],
    }
  },
  mode: 'jit'


}