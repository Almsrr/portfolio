import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "../Heading";
// import HoverCard from "../HoverCard";

export default function StackSection() {
  const { isDarkTheme } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulTechnology(sort: { createdAt: ASC }) {
        nodes {
          id
          title
          description {
            description
          }
          image {
            filename
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
      }
    }
  `);

  const stackClassName = classNames("stack__items", {
    "dark": isDarkTheme,
    "light": !isDarkTheme,
  });

  return (
    <section className="stack" id="stack">
      <div className="stack__container">
        <Heading>
          <h2>Stack</h2>
          <h3>Toolbelt</h3>
        </Heading>
        <ul className={stackClassName}>
          {data.allContentfulTechnology.nodes.map(({ id, image }) => {
            return (
              <li key={id}>
                <div className="stack-card">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={image.filename}
                    class="img"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
