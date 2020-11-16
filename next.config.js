const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
})

