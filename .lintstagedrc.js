module.exports = {
  '*.html': ['htmlhint', 'prettier --write'],
  '*.js': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
};
