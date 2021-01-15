module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|gif|jpg)$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [{ loader: 'url-loader' }],
    });
    return config;
  },
};
