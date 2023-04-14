import React from "react";
import classNames from "classnames";
// import { StaticImage } from "gatsby-plugin-image";

export default function Picture({ src, roundedBorder, className }) {
  let pictureClassNames = classNames("picture", className);

  if (roundedBorder) {
    pictureClassNames += ` rounded-${roundedBorder}`;
  }

  return <div className={pictureClassNames} />;
}
