const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "auth",
  exposes: {
    "./Bootstrap": "./src/app/mfe-bootstrap.ts",
  },
  shared: {},
});
