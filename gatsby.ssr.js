const React = require("react");
const AOS = require("aos");
// const api = require("./gatsby-api-methods");

exports.onRenderBody = ({
  setHeadComponents,
  setBodyAttributes,
  setHtmlAttributes,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Manrope-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="monropeLightFont"
    />,
    <link
      rel="preload"
      href="/fonts/Manrope-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="monropeRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/Manrope-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="monropeBoldFont"
    />,
    <link
      rel="preload"
      href="/fonts/RobotoSlab-Light.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="robotoSlabLightFont"
    />,
    <link
      rel="preload"
      href="/fonts/RobotoSlab-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="robotoSlabRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/RobotoSlab-Bold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="robotoSlabBoldFont"
    />,
  ]);
  setBodyAttributes({ className: "body-dark" });
  setHtmlAttributes({ lang: "en" });
};

exports.onRenderBody = () => AOS.init();

// exports.wrapPageElement = api.wrapWithLayout;

// exports.wrapRootElement = api.wrapWithProvider;
