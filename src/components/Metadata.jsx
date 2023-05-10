import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Metadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
      allContentfulMetadata {
        nodes {
          title
          description {
            description
          }
        }
      }
    }
  `);
  const metaFromConfig = data.site.siteMetadata;
  const metaFromContentful = data.allContentfulMetadata.nodes[0];

  const title = metaFromContentful.title || metaFromConfig.title;
  const description =
    metaFromContentful.description.description || metaFromConfig.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  );
}
