/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary :'#90386B',
        secondary :'#2A3C8D' ,
        tertiary : '#69629D' ,
        neutral :'#222222',
        errors :'#EA1717',
        success :'#2EC93D'
      } ,
      spacing: {
        '4xs': '4px',
        '2xs': '8px',
        'xs': '16px',
        'sm': '24px',
        'md': '32px',
        'lg': '40px',
        'xl': '48px',
        '2xl': '56px',
        
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'headline-l': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'headline-m': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'headline-s': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'headline-xs': ['1rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        'body-m': ['1rem', { lineHeight: '1.75', letterSpacing: '0em' }],
        'body-xs': ['0.625rem', { lineHeight: '1.75', letterSpacing: '0em' }],
        'button-l': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        'button-m': ['1rem', { lineHeight: '1.5', letterSpacing: '0em' }],
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        semibold: 600,
        regular: 400,
      },
      borderRadius: {
        'button': '6px', 
      }

    },
  },
  plugins: [],
}

