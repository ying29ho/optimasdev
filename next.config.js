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

env:{
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  OPTIMAS_EMAIL: process.env.OPTIMAS_EMAIL,
},
}