/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textShadow: {
        'outline': '2px 2px 0 #000', // Custom shadow for outline effect
      },
     
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          textShadow: '1px 1px 0 #000',
        },
      });
    },
    
  ],
}

