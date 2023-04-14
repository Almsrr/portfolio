import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "./Heading";
import { generateId } from "../../utils";
import Picture from "../Picture";

const projects = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "",
    },
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "top-left",
    },
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "",
    },
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "bottom-right",
    },
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "bottom-right",
    },
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, itaque.",
    image: {
      src: "",
      roundedBorderSide: "",
    },
  },
];

export default function ProjectsSection() {
  const { isDarkThemeActive } = useSiteContext();

  const projectsListClassName = classNames("projects__list", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  const calculateRowNumber = (index, columns) => {
    return Math.floor(index / columns) + 1;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <Heading>
          <h2>Projects</h2>
          <p>Award winning work</p>
        </Heading>
        <div className={projectsListClassName}>
          {projects.map((p, i) => {
            const rowNum = calculateRowNumber(i, 2);
            const even = rowNum % 2 === 0;

            const projectCardClassName = classNames("project-card", {
              "normal": !even,
              "inverted": even,
            });

            return (
              <article key={generateId()} className={projectCardClassName}>
                <Picture
                  className="image"
                  src={p.image.src}
                  roundedBorder={p.image.roundedBorderSide}
                />
                <div className="description">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <a href="www.google.com" target="_blank" rel="norreferer">
                    <i class="fa-solid fa-arrow-right-long" />
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
