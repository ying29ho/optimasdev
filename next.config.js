/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env:{
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    OPTIMAS_EMAIL: process.env.OPTIMAS_EMAIL,
    TEST_EMAIL: process.env.TEST_EMAIL,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
  },
  nextConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

images:{
  disableStaticImages: true, 
},

}