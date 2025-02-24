module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ng-web.s3.amazonaws.com', 'cdn.sanity.io'],
  },
  webpack: (config) => {
    // Use built-in asset modules instead of raw-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    })
    return config
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']
}