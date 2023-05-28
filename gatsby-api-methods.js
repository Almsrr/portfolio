const React = require("react");
const SiteContextProvider = require("./src/context").default;

exports.wrapWithProvider = ({ element }) => (
  <SiteContextProvider>{element}</SiteContextProvider>
);
