/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'light':"rgba(0, 0, 34, 0.5)",
      'bd':"rgba(31, 100, 255, 1)",
      'gg':"rgba(192,192,192,1)",
      'yell':"rgba(255, 198, 86, 1)",
      'ss':"rgba(249, 249, 249, 1)",
      'kk':"rgba(255, 223, 162, 1)",
      'ff':"rgba(65, 146, 255, 0.4)",
      'gi':"rgba(192, 192, 192, 1)",
      'lab':"rgba(247, 117, 86, 0.53)",
      'bit':"rgba(65, 146, 255, 0.4)",
      'mongo':"rgba(52, 168, 83, 1)",
      'redis':"rgba(247, 117, 86, 0.53)",
      'post':"rgba(100, 186, 255, 1)"
  }
},
  },
  plugins: [],
}