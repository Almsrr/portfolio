import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

export default function HomeSection(props) {
  // const { profile, socials } = props;
  // const data = useStaticQuery(graphql``);

  return (
    <section>
      <div>
        <div>
          <header>
            <p className="greeting">Hello, I'am</p>
            <p className="goodbye">Hello, I'am</p>
            <h1>
              Alam Sierra{" "}
              <span>Software Engineer and Front-End Web Developer</span>
            </h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dicta inventore mollitia harum facere aperiam perspiciatis laborum
            deleniti consequuntur.
          </p>
          <div>Mobile image</div>
          <h3>Find me on</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Discord</li>
          </ul>
        </div>
        <div>Desktop image</div>
      </div>
    </section>
  );
}
