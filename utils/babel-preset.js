const defaultOptions = {
  // https://babeljs.io/docs/en/next/babel-preset-env#options
  envPresetOptions: {
    modules: false,
    useBuiltIns: 'usage',
    loose: false // http://2ality.com/2015/12/babel6-loose-mode.html
  },

  transformRuntimeOptions: {
    helpers: true,
    corejs: 2,
    regenerator: true,
    useESModules: true
  }
};

module.exports = function(api) {
  return {
    presets: [[require('@babel/preset-env'), defaultOptions.envPresetOptions]],

    plugins: [
      require('@babel/plugin-proposal-class-properties'),

      require('@babel/plugin-proposal-object-rest-spread'),

      require('@babel/plugin-transform-async-to-generator'),

      require('@babel/plugin-transform-react-jsx'),

      [
        require('@babel/plugin-transform-runtime'),
        defaultOptions.transformRuntimeOptions
      ]
    ].filter(Boolean)
  };
};
