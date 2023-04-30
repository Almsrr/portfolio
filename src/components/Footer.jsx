import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <p>&copy;2023</p>
          <a
            className="author"
            href="https://github.com/almsrr/portfolio"
            target="_blank"
          >
            <i className="code bx bx-code-curly" />
            with
            <i className="heart bx bxs-heart" />
            by Alam
          </a>
        </div>
      </div>
    </footer>
  );
}
