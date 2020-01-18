/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: "A travel website made with GatsbyJs.",
    author: "@SarthakC",
    data: {
      name: "John",
      age: 24,
    },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
