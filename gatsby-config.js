/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Alam Sierra | Front-End Engineer",
    siteUrl: "https://www.alamsierra.com",
    description:
      "Portfolio website created by Alam Sierra, a passionate Dominican Front-End React Developer",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
