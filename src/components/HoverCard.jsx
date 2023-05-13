import React from "react";

import classNames from "classnames";

import Card from "./Card";

export default function HoverCard({ image, title, description, className }) {
  const cardClassName = classNames("hover-card", className);

  return (
    <Card className={cardClassName}>
      <div className="body">
        <div>
          <img
            src={image.file.url}
            alt={image.filename}
            className="hover-card__img"
          />
        </div>
        <h3>{title}</h3>
        <div className="hover-card__description">
          <span className="line"></span>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}
