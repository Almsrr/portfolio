import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";

export default function HomeSection() {
  const { isDarkThemeActive } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          discordChannelLink
          fullName
          githubProfileLink
          instagramProfileLink
          linkedInProfileLink
          specialization
          presentationPicture {
            gatsbyImageData(width: 500)
            filename
          }
          bio {
            raw
          }
        }
      }
    }
  `);

  const person = data.allContentfulPerson.nodes[0];
  const {
    fullName,
    specialization,
    bio,
    linkedInProfileLink,
    githubProfileLink,
    instagramProfileLink,
    discordChannelLink,
    presentationPicture,
  } = person;

  const linkClassName = classNames("socials__links", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="hero">
          <div className="hero__bio">
            <h1>
              Hey, <span>I'm</span>
              <span>{fullName}</span>
              {specialization}
            </h1>
            {renderRichText(bio)}
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
          </div>
          <div className="hero__img-container">
            <GatsbyImage
              image={getImage(presentationPicture)}
              alt={presentationPicture.filename}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
