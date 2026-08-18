const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const mfeConfig = withModuleFederationPlugin({
  name: "notification",
  exposes: {
    "./Bootstrap": "./src/app/mfe-bootstrap.ts",
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
