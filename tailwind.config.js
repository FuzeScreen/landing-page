module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
  },
  theme: {
    extend: {
      colors: {
        'fuze-dark': '#202020',
        'fuze-semidark': '#292929',
        'fuze-orange': '#F39435',
        'fuze-light': '#2e2e2e'
      },
      height: {
        '96': '24rem',
        '128': '32rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
