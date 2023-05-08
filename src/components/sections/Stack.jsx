import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "./Heading";
import HoverCard from "../HoverCard";

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
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
          <li>
            <HoverCard
              title="Title"
              imgSrc=""
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              className="stack-card"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
