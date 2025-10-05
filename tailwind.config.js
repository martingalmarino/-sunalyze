/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F9A825',
          light: '#FFC107',
          dark: '#F57F17',
        },
        secondary: {
          DEFAULT: '#FF7043',
          light: '#FF8A65',
          dark: '#E64A19',
        },
        cta: {
          DEFAULT: '#FF9800',
          hover: '#F57C00',
          pressed: '#EF6C00',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
        },
        text: {
          primary: '#212121',
          secondary: '#424242',
          muted: '#757575',
        },
        divider: '#E0E0E0',
      },
    },
  },
  plugins: [],
}
