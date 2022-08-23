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
  NEXT_PUBLIC_SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
  NEXT_PUBLIC_OPTIMAS_EMAIL: process.env.NEXT_PUBLIC_OPTIMAS_EMAIL,
},
}