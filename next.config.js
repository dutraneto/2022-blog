/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd
  }
})

// eslint-disable-next-line no-undef
// module.exports = {
//   reactStrictMode: true
// }
