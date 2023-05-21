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
          specialization
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
  const authorSpecialization = data.allContentfulPerson.nodes[0].specialization;
  const authorFirstName = authorFullName.split(" ")[0];
  const siteSourceCode = data.allContentfulMetadata.nodes[0].source;

  const sourceLinkClassName = classNames("source", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  const authorLinkClassName = classNames("author", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <p className={authorLinkClassName}>
            <span className="name">{authorFullName}</span>
            <span className="spec">{authorSpecialization}</span>
          </p>
          <p className={sourceLinkClassName}>
            <a href={siteSourceCode} target="_blank" rel="noreferrer">
              <i className="code bx bx-code-curly" />
              with
              <i className="heart bx bxs-heart" />
              by {authorFirstName}.
            </a>
            <span className="copy">&copy;2023</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
