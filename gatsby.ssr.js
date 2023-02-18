import React from "react";

// import Layout from "./src/components/Layout";

export const onRenderBody = ({ setHeadComponents }) => {
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
};

// export const wrapPageElement = ({ element, props }) => {
//   return (
//     <Layout {...props}>
//       {element}
//     </Layout>
//   );
// };
