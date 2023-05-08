import React from "react";
import classNames from "classnames";
// import { StaticImage } from "gatsby-plugin-image";

import Card from "./Card";

export default function HoverCard({ imgSrc, title, description, className }) {
  const cardClassName = classNames("hover-card", className);

  return (
    <Card className={cardClassName}>
      <div className="body">
        {/* <StaticImage
          src=""
          alt="stack-icon"
          imgClassName="img"
          placeholder="dominantColor"
          width={80}
          height={80}
          layout="fixed"
        /> */}
        <h3>{title}</h3>
        <div className="description">
          <span className="line"></span>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}
