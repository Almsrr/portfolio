import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Metadata({ pageTitle }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  const siteTitle = pageTitle ? `${pageTitle} | ${title}` : `${title}`;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </>
  );
}
