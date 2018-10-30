const babelJest = require('babel-jest');

const babelOptions = {
  plugins: [
    ['module-resolver', {
      root: ['./src'],
    }],
  ],
  presets: ['@babel/env', '@babel/react'],
};

module.exports = babelJest.createTransformer(babelOptions);
