import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import classNames from "classnames";

import Card from "../Card";
import { useSiteContext } from "../../hooks";
import Heading from "../Heading";

export default function ServicesSection() {
  const { isDarkTheme } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { createdAt: ASC }) {
        nodes {
          id
          description
          title
          icon {
            gatsbyImageData(width: 60, layout: FIXED, placeholder: NONE)
            filename
          }
        }
      }
    }
  `);

  const servicesListClassName = classNames("services__list", {
    "dark": true,
    "light": false,
  });

  return (
    <section className="services" id="services">
      <div className="services__container">
        <Heading>
          <h2>Services</h2>
          <h3>Skill-Set</h3>
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
