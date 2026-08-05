const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe2",
  exposes: {
    "./Bootstrap": "./src/app/mfe-bootstrap.ts",
  },
  shared: {},
});
