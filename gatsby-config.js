/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Alam Sierra",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": `service`,
        "path": `${__dirname}/data/services/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": `project`,
        "path": `${__dirname}/data/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": `technology`,
        "path": `${__dirname}/data/stack/`,
      },
    },
  ],
};
