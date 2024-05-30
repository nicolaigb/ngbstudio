module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ng-web.s3.amazonaws.com', 'cdn.sanity.io'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    })

    return config;
  }
}
