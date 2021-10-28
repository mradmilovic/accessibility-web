const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = (phase, defaultConfig) => {
  return withSentryConfig(
    {
      ...defaultConfig,
      // productionBrowserSourceMaps: true,
      swcMinify: true,
      webpack: (config) => {
        config.module.rules.push({
          test: /\.svg/,
          issuer: /\.(j|t)sx?$/,
          use: ["@svgr/webpack"],
        });

        return config;
      },
    },
    sentryWebpackPluginOptions
  );
};
