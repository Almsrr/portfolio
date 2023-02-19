const React = require("react");
require("normalize.css");
require("./src/sass/main.scss");
const Layout = require("./src/components/Layout").default;

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
