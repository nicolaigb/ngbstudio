module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|gif)$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [{ loader: 'url-loader' }],
    });
    return config;
  },
};
