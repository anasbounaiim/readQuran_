/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        custom: ['BHamid', 'sans'], // Use 'BHamid' as the font name
        custom1: ['BHamid1', 'sans'], // Use 'BHamid' as the font name
        custom2: ['DTPN3', 'sans'], // Use 'BHamid' as the font name
      },
    },
  },
  plugins: [],
}

