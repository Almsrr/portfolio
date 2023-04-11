import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

import { useSiteContext } from "../../hooks";

export default function HomeSection() {
  const { isDarkThemeActive } = useSiteContext();

  const linkClassName = classNames("socials__links", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="hero">
          <div className="hero__bio">
            <h1>
              Hey, <span>I'm</span>
              <span>Alam Sierra</span>
              Front-End Engineer
            </h1>
            <p>
              Making the world a better place with quality software. Dominican
              Republic native looking for new challenges and a team to
              accomplish them. The type of person you can party with until you
              forget your name, and then have the deepest programming
              conversation of your life the following day.
            </p>
            <div className="socials">
              <h3>Find me on</h3>
              <div className={linkClassName}>
                <a
                  href="https://www.linkedin.com/in/alam-sierra-6b49ab219/"
                  target="_blank"
                  title="LinkedIn"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin" />
                </a>
                <a
                  href="https://github.com/Almsrr"
                  target="_blank"
                  title="Github"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github" />
                </a>
                <a
                  href="https://discord.com/"
                  target="_blank"
                  title="Discord"
                  rel="noreferrer"
                >
                  <i className="bx bxl-discord-alt" />
                </a>
                <a
                  href="https://www.instagram.com/alamsierrad/"
                  target="_blank"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero__img-container">
            <StaticImage
              src="../../images/astronaut.png"
              alt="astronaut"
              width={500}
              height={500}
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
