import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import classNames from "classnames";

import Card from "../Card";
import { useSiteContext } from "../../hooks";
import Heading from "./Heading";

export default function ServicesSection() {
  const { isDarkThemeActive } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulService {
        nodes {
          id
          description
          title
          icon {
            gatsbyImageData(width: 60)
            filename
          }
        }
      }
    }
  `);

  const servicesListClassName = classNames("services__list", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  return (
    <section className="services" id="services">
      <div className="services__container">
        <Heading>
          <h2>Services</h2>
          <p>Skill-Set</p>
        </Heading>
        <ul className={servicesListClassName}>
          {data.allContentfulService.nodes.map((service) => {
            return (
              <li data-aos="zoom-in-up" key={service.id}>
                <Card className="service-card">
                  <div>
                    <GatsbyImage
                      image={getImage(service.icon)}
                      alt={service.icon.filename}
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
