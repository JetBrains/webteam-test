module.exports = () => {
  return {
    plugins: [
      require('postcss-url')(),

      require('postcss-mixins')(),

      require('postcss-custom-media')({
        importFrom: 'app/exterrnal-libs/breakpoints/index.css'
      }),

      require('postcss-nested')(),

      require('postcss-custom-properties')(),

      require('postcss-calc')(),

      require('autoprefixer')()
    ]
  };
};
