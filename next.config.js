/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  
  nextConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

images:{
  disableStaticImages: true, 
},
}