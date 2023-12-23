/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
    isrMemoryCacheSize: 0, // disable default in-memory caching
  },
}
