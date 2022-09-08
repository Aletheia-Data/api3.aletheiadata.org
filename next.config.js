/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  'swagger-ui-react',
  'react-syntax-highlighter',
  'swagger-client'
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);