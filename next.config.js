
require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* config options here */
  webpack: config => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    'COMMERCEJS_PUBLIC_KEY': process.env.COMMERCEJS_PUBLIC_KEY
  }
})