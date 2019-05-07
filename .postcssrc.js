module.exports = require('./utils/postcss-preset')({
  plugins: [
    process.env.NODE_ENV === 'production' && require('cssnano')()
  ].filter(Boolean)
});