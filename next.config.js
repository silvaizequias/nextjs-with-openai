const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'thinksurance.de',
      'www.softplan.com.br',
      'firebasestorage.googleapis.com',
      'login.audaces.com'
    ]
  }
}

module.exports = nextConfig
