module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'outer-radial': '#141539',
        'inner-radial': '#1f3756',
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'barlow-semi-condensed': ['"Barlow Semi Condensed"'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
