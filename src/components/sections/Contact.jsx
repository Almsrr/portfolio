import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import ContactForm from "../ContactForm";
import Card from "../Card";

export default function ContactSection() {
  const { isDarkTheme } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        nodes {
          email
          phone
          address
        }
      }
    }
  `);

  const contactInfo = data.allContentfulPerson.nodes[0];

  const contactSectionClassName = classNames("contact", {
    "dark": true,
    "light": false,
  });

  const submit = () => {};

  return (
    <section className={contactSectionClassName} id="contact">
      <div className="contact__container">
        <header>
          <h2>Let's work</h2>
        </header>
        <div className="grid">
          <div className="form">
            <ContactForm isDarkTheme={isDarkTheme} onSubmit={submit} />
          </div>
          <div className="contact-item address">
            <Card className="item-card">
              <i className="map fa-regular fa-map" />
              <p>{contactInfo.address}</p>
            </Card>
          </div>
          <div className="contact-item phone">
            <Card className="item-card">
              <i className="phone bx bx-phone" />
              <p>{contactInfo.phone}</p>
            </Card>
          </div>
          <div className="contact-item email">
            <Card className="item-card">
              <i className="email fa-regular fa-envelope" />
              <p>{contactInfo.email}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
