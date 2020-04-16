const isLibraryMode = process.env.BUILD_TARGET === 'library'

module.exports = {
  publicPath: './',

  css: { extract: false },
  devServer: {
    disableHostCheck: true,
  },

  chainWebpack (config) {
    if (!isLibraryMode) {
      config.externals({ vue: 'Vue' })
    }
    config.devtool(false)
  }
}
