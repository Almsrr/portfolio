import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HomeSection() {
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
