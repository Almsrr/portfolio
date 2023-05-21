// const React = require("react");
require("normalize.css");
require("boxicons/css/boxicons.min.css");
require("./src/sass/main.scss");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("aos/dist/aos.css");
const api = require("./gatsby-api-methods");
const AOS = require("aos");

exports.onInitialClientRender = () => AOS.init();

exports.wrapPageElement = api.wrapWithLayout;

exports.wrapRootElement = api.wrapWithProvider;
