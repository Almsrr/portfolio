import React from "react";
import classNames from "classnames";

export default function Heading({ children, className }) {
  const headingClassNames = classNames("heading", className);
  return <header className={headingClassNames}>{children}</header>;
}
