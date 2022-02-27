/* eslint-disable no-undef */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'codepen.io']
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching
  }
})
