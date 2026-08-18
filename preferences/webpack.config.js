const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "preferences",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      name: "preferences",
      filename: "remoteEntry.js",
      exposes: {
        "./Bootstrap": "./src/app/mfe-bootstrap.ts",
      },
    }),
  ],
};
