const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',

      'md': '855px',

      'lg': '1024px',

      'xl': '1280px',
  
      '2xl': '1536px',
    },
    colors : {
      ...colors,
      "gh" : {
        DEFAULT : "#090c10"
      },
      "gh-text" : {
        DEFAULT : "#ededed"
      },
      "gh-navbar" : {
        DEFAULT : "#161b22"
      },
      "gh-search" : {
        DEFAULT : "#0d1117"
      },
      "gh-sidebar" : {
        DEFAULT : "#0c0f15"
      }
    },
    extend : {
      gridTemplateColumns : {
        "github" : "25% auto min-content",
        "github-md" : "33% auto"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
