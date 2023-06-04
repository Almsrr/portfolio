import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useSiteContext } from "../hooks";

export default function Socials() {
  const { isDarkTheme } = useSiteContext();
  const [linkClassName, setLinkClassName] = useState("");

  useEffect(() => {
    const classes = classNames("socials__links", {
      "dark": isDarkTheme,
      "light": !isDarkTheme,
    });
    setLinkClassName(classes);
  });

  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          discordChannelLink
          githubProfileLink
          instagramProfileLink
          linkedInProfileLink
        }
      }
    }
  `);

  const person = data.allContentfulPerson.nodes[0];
  const {
    linkedInProfileLink,
    githubProfileLink,
    instagramProfileLink,
    discordChannelLink,
  } = person;

  return (
    <div className="socials">
      <h3>Find me on</h3>
      <div className={linkClassName}>
        <a
          href={linkedInProfileLink}
          target="_blank"
          title="LinkedIn"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin" />
        </a>
        <a
          href={githubProfileLink}
          target="_blank"
          title="Github"
          rel="noreferrer"
        >
          <i className="bx bxl-github" />
        </a>
        <a
          href={discordChannelLink}
          target="_blank"
          title="Discord"
          rel="noreferrer"
        >
          <i className="bx bxl-discord-alt" />
        </a>
        <a
          href={instagramProfileLink}
          target="_blank"
          title="Instagram"
          rel="noreferrer"
        >
          <i className="bx bxl-instagram" />
        </a>
      </div>
    </div>
  );
}
