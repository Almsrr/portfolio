import React from "react";
import classNames from "classnames";

import Card from "../Card";
import { useSiteContext } from "../../hooks";

export default function ServicesSection() {
  const { isDarkThemeActive } = useSiteContext();

  const servicesListClassName = classNames("services__list", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <section className="services" id="services">
      <div className="services__container">
        <header>
          <h2>Services</h2>
          <p>Skill-Set</p>
        </header>
        <ul className={servicesListClassName}>
          <li>
            <Card className="service-card">
              <p>icon</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus animi deleniti nobis totam culpa. Sed et corrupti nulla
                obcaecati ad?
              </p>
            </Card>
          </li>
          <li>
            <Card className="service-card">
              <p>icon</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus animi deleniti nobis totam culpa. Sed et corrupti nulla
                obcaecati ad?
              </p>
            </Card>
          </li>
          <li>
            <Card className="service-card">
              <p>icon</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus animi deleniti nobis totam culpa. Sed et corrupti nulla
                obcaecati ad?
              </p>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
}
