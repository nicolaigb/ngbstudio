module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ng-web.s3.amazonaws.com', 'cdn.sanity.io'],
  },
  webpack: (config) => {
    // Add the raw-loader for GLSL files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: 'raw-loader',
      exclude: /node_modules/,
    })

    return config
  },
  // Explicitly tell Turbo about this custom loader
  experimental: {
    turbo: {
      rules: {
        // Configure the custom loader for the .glsl extension
        '*.glsl': {
          loaders: ['raw-loader'],
        },
      },
    },
  },
}
