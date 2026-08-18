const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "home",
  exposes: {
    "./Bootstrap": "./src/app/mfe-bootstrap.ts",
  },
  shared: {},
});
