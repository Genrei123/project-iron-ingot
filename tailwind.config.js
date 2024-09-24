const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'button-color': '#a50000',
        'nav-color': "#ffffff",
        'button-texts-color': '#ffffff',
        'header-color': '#fffff'
      }
      
    },
  },
  plugins: [],
});
