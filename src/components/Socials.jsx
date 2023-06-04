import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useTheme } from "../hooks";

export default function Socials() {
  const { isDarkTheme } = useTheme();

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

  const linkClassName = classNames("socials__links", {
    "light": !isDarkTheme,
    "dark": isDarkTheme,
  });

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
