const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfeConfig = withModuleFederationPlugin({
  name: "mfe3",
  exposes: {
    "./Bootstrap": "./src/app/mfe-bootstrap.ts",
    "./Service": "./src/app/test.service.ts",
  },
  shared: {},
});

module.exports = {
  ...mfeConfig,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  },
};
