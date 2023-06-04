const React = require("react");
const api = require("./gatsby-api-methods");

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
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
  setHtmlAttributes({ lang: "en" });
  setBodyAttributes({ className: "none" });
};

exports.wrapRootElement = api.wrapWithProvider;
