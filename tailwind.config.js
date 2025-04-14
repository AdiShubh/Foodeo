/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',  // Slower spin (3 seconds per spin)
        'spin-fast': 'spin 0.5s linear infinite', // Faster spin (0.5 seconds per spin)
      },
    },

  },

  plugins: [],
}

