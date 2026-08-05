const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe4",
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

      name: "mfe4",
      filename: "remoteEntry.js",
      exposes: {
        "./Bootstrap": "./src/app/mfe-bootstrap.ts",
      },
    }),
  ],
};
