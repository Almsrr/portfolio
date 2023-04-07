const React = require("react");
require("normalize.css");
// require("boxicons");
require("./src/sass/main.scss");
const Layout = require("./src/components/Layout").default;
const SiteContextProvider = require("./src/context").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <SiteContextProvider>
      <Layout {...props}>{element}</Layout>
    </SiteContextProvider>
  );
};
