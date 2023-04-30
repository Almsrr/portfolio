import React from "react";

import classNames from "classnames";

import { useSiteContext } from "../hooks";

export default function Footer() {
  const { isDarkThemeActive } = useSiteContext();

  const authorLinkClassName = classNames("author", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <p>&copy;2023</p>
          <a
            className={authorLinkClassName}
            href="https://github.com/almsrr/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <i className="code bx bx-code-curly" />
            with
            <i className="heart bx bxs-heart" />
            by Alam
          </a>
        </div>
      </div>
    </footer>
  );
}
