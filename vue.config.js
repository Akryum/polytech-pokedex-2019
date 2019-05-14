module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: ['~@/style/imports']
      }
    }
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}
