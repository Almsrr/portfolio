import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import classNames from "classnames";

import { useTheme } from "../../hooks";
import Heading from "../Heading";
import Picture from "../Picture";

export default function ProjectsSection() {
  const { isDarkTheme } = useTheme();
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { createdAt: ASC }) {
        nodes {
          id
          title
          description {
            raw
          }
          externalReference
          roundedBorderSide
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
            filename
          }
          date(formatString: "MMMM YYYY")
        }
      }
    }
  `);

  const projectsListClassName = classNames("projects__list", {
    "light": !isDarkTheme,
    "dark": isDarkTheme,
  });

  const calculateRowNumber = (index, columns) => {
    return Math.floor(index / columns) + 1;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <Heading>
          <h2>Projects</h2>
          <h3>Award winning work</h3>
        </Heading>
        <div className={projectsListClassName}>
          {data.allContentfulProject.nodes.map((p, i) => {
            const rowNum = calculateRowNumber(i, 2);
            const even = rowNum % 2 === 0;

            const projectCardClassName = classNames("project-card", {
              "normal": !even,
              "inverted": even,
            });

            return (
              <article key={p.id} className={projectCardClassName}>
                <Picture
                  className="img"
                  imageData={p.image}
                  roundedBorder={p.roundedBorderSide}
                />
                <div className="description">
                  <h3>{p.title}</h3>
                  {/* <p className="date">{p.date}</p> */}
                  {renderRichText(p.description)}
                  <a
                    href={p.externalReference}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
