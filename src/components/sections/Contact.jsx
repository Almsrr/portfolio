import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import ContactForm from "../ContactForm";
import Card from "../Card";

export default function ContactSection() {
  const { isDarkThemeActive } = useSiteContext();

  const contactSectionClassName = classNames("contact", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
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
            <ContactForm isDarkTheme={isDarkThemeActive} onSubmit={submit} />
          </div>
          <div className="contact-item address">
            <Card className="item-card">
              <i className="map fa-regular fa-map" />
              <p>Address</p>
            </Card>
          </div>
          <div className="contact-item phone">
            <Card className="item-card">
              <i className="phone bx bx-phone" />
              <p>Phone</p>
            </Card>
          </div>
          <div className="contact-item email">
            <Card className="item-card">
              <i className="email fa-regular fa-envelope" />
              <p>Email</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
