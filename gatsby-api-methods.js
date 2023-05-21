const React = require("react");
const Layout = require("./src/components/Layout").default;
const SiteContextProvider = require("./src/context").default;

exports.wrapWithLayout = ({ element }) => <Layout>{element}</Layout>;

exports.wrapWithProvider = ({ element }) => (
  <SiteContextProvider>{element}</SiteContextProvider>
);
