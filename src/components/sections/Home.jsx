import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";

import Socials from "../Socials";

export default function HomeSection() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          fullName
          specialization
          presentationPicture {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
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
  const { fullName, specialization, bio, presentationPicture } = person;

  const renderRichConfig = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="bio">{children}</p>,
    },
  };

  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="hero">
          <div className="hero__bio">
            <h1>
              Hey, I'm <br />
              <b>{fullName}</b> <br />
              <span>{specialization}</span>
            </h1>
            {renderRichText(bio, renderRichConfig)}
            <Socials />
          </div>
          <div className="hero__img-container">
            <GatsbyImage
              image={getImage(presentationPicture)}
              alt={presentationPicture.filename}
              class="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
