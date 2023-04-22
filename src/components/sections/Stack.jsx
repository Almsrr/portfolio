import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "./Heading";
import HoverCard from "../HoverCard";
import { generateId } from "../../utils";

const stack = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    imgSrc: "../../images/reactjs-icon.svg",
  },
];

export default function StackSection() {
  const { isDarkThemeActive } = useSiteContext();

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
          {stack.map((i) => (
            <li key={generateId()}>
              <HoverCard
                title={i.title}
                imgSrc={i.imgSrc}
                description={i.description}
                className="stack-card"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
