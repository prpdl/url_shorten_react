module.exports = {
  mode:'jit',
    purge: ['./src/**//*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          footer: '#1b415e',
          twitter: '#00acee'
        }
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    variants: {
      extend: { ringWidth: ['hover', 'active']},
    },
    plugins: [],
  }