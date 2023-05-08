import React from "react";
import classNames from "classnames";

export default function Card({ children, className }) {
  const cardClassName = classNames("card", className);

  return <div className={cardClassName}>{children}</div>;
}
