import React from "react";
import classNames from "classnames";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Picture({ imageData, roundedBorder, className }) {
  let pictureClassNames = classNames("picture", className);

  if (roundedBorder) {
    pictureClassNames += ` rounded-${roundedBorder}`;
  }

  return (
    <GatsbyImage
      image={getImage(imageData)}
      alt={imageData.filename}
      className={pictureClassNames}
      objectFit="cover"
      objectPosition="center"
    />
  );
}
