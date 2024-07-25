/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './globals.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/bodyImage.jpg')",
        'feature-gradient': 'linear-gradient(91.6deg, #E2C489 5.24%, #69A4B5 97.72%)',
        'custom-gradient': 'linear-gradient(92.12deg, #F650A0 -24.59%, #FF9897 89.88%)',
        'incubationprogramme': 'linear-gradient(95.8deg, #8C2273 5.64%, #FF5B94 54.75%)',
        'criteria-gradient': 'linear-gradient(88.66deg, #D9BB7E 33.91%, #D9BB7E 33.92%, #F8951D 116.78%)',
        'dreams-come-true' :'linear-gradient(268.91deg, #DEC38B -15.63%, #6AA4B6 91.5%)',


      },
      fontFamily: {
        'san-francisco': ['SF Pro Display', 'sans-serif'],
        'bradley-hand': ['Bradley Hand', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        criteria: '#8B7E4E',
        scope: '#D9BB7E',
        gate: '#E2C489',
        whiteOpacity: '#FFFFFF52',
      },
      boxShadow: {
        'custom': '0px 4px 40px 0px #00000040',
        'custom-inset': 'inset 0px 4px 0px 629px #00000082',
      },
      
    },
  },
  plugins: [
    
  ],
}
