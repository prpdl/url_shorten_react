module.exports = {
  mode:'jit',
    purge: ['./src/**//*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'regal-blue': '#131f2c'
        }
      },
    },
    variants: {
      extend: { ringWidth: ['hover', 'active']},
    },
    plugins: [],
  }