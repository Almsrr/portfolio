require("normalize.css");
require("boxicons/css/boxicons.min.css");
require("./src/sass/main.scss");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("aos/dist/aos.css");
const AOS = require("aos");
const api = require("./gatsby-api-methods");

// exports.onInitialClientRender = () => AOS.init();

exports.wrapRootElement = api.wrapWithProvider;
