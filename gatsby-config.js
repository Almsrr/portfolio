/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "",
    siteUrl: "https://www.alamsierra.com",
    description: "",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "m2c3h995rx1f",
        accessToken: "hfqh_f5fnEImcTNOUgngrpXHN3xIfdvmWTQp5BGbJHE",
      },
    },
  ],
};
