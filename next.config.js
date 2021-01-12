module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|svg|gif)$/,
      use: [{ loader: 'url-loader' }],
    });
  },
};
