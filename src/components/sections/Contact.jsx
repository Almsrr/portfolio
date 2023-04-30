import React from "react";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import ContactForm from "../ContactForm";

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
            <div className="card">
              <span></span>
              <p>Address</p>
            </div>
          </div>
          <div className="contact-item phone">
            <div className="card">
              <span></span>
              <p>Phone</p>
            </div>
          </div>
          <div className="contact-item email">
            <div className="card">
              <span></span>
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
