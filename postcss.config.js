module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-strip-inline-comments'),
    require('precss'),
    require('autoprefixer'),
    require('cssnano')
  ]
}
;
