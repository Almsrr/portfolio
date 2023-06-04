import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "../Heading";
import HoverCard from "../HoverCard";

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
            file {
              url
            }
          }
        }
      }
    }
  `);

  const stackClassName = classNames("stack__items", {
    "light": !isDarkTheme,
    "dark": isDarkTheme,
  });

  return (
    <section className="stack" id="stack">
      <div className="stack__container">
        <Heading>
          <h2>Stack</h2>
          <h3>Toolbelt</h3>
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
