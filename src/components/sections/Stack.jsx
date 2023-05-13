import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "./Heading";
import HoverCard from "../HoverCard";

export default function StackSection() {
  const { isDarkThemeActive } = useSiteContext();
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
            file {
              url
            }
          }
        }
      }
    }
  `);

  const stackClassName = classNames("stack__items", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <section className="stack" id="stack">
      <div className="stack__container">
        <Heading>
          <h2>Stack</h2>
          <p>Toolbelt</p>
        </Heading>
        <ul className={stackClassName}>
          {data.allContentfulTechnology.nodes.map(
            ({ id, title, image, description }) => {
              return (
                <li key={id}>
                  <HoverCard
                    title={title}
                    image={image}
                    description={description.description}
                    className="stack-card"
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
