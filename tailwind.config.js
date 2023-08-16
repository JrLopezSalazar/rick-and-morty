/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

       "fira-code": [ 'Fira Code', 'monospace'],
    },

    extend: {
      backgroundImage: {
        'bg-header': "url('https://www.figma.com/file/nJAVB70jRFf5RwPfIExg01/Proyectos---React?type=design&node-id=72-1757&mode=design&t=X8zKtXxL0nKF0AyB-4')",
        'bg-body': "url(/public/img/bg1.png)",
        'bg-portal': "url(/public/img/portal.png)",
        'bg-logo': "url(/public/img/logo.png)",

      }
    },
  },
  plugins: [],
}

