import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useSiteContext } from "../hooks";

export default function Footer() {
  const { isDarkThemeActive } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          fullName
        }
      }
      allContentfulMetadata {
        nodes {
          source
        }
      }
    }
  `);

  const authorFullName = data.allContentfulPerson.nodes[0].fullName;
  const authorFirstName = authorFullName.split(" ")[0];
  const siteSourceCode = data.allContentfulMetadata.nodes[0].source;

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
            href={siteSourceCode}
            target="_blank"
            rel="noreferrer"
          >
            <i className="code bx bx-code-curly" />
            with
            <i className="heart bx bxs-heart" />
            by {authorFirstName}
          </a>
        </div>
      </div>
    </footer>
  );
}
