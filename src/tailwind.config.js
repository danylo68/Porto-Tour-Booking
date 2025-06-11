module.exports = {
    content: [
       "./index.html",
       "./src/**/*.{vue,js,ts,jsx,tsx}",
       './node_modules/flowbite/**/*.js' 
    ],
    plugins: [
      require('flowbite/plugin')  // Active les composants Flowbite
    ],
    theme: {
      extend: {
        fontFamily: {
          aileron: ['Aileron', 'sans-serif'],
        },
      },
    },
   
 }
 
