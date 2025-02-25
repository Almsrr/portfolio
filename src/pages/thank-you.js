import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Metadata from "../components/Metadata";

export default function ThankYouPage() {
  const data = useStaticQuery(graphql`
    query {
      contentfulThankYou {
        heading
        message {
          raw
        }
        homeLinkText
      }
    }
  `);

  return (
    <div className="thank-you">
      <div className="thank-you__content">
        <h1>{data.contentfulThankYou.heading}</h1>
        {renderRichText(data.contentfulThankYou.message)}
        <Link to="/">{data.contentfulThankYou.homeLinkText}</Link>
      </div>
    </div>
  );
}

export const Head = () => <Metadata />;
