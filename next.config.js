/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd
  }
})

module.exports = {
  withPWA,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  }
}
