exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `tours/${slug}`,
      component: require.resolve(`./src/templates/tour-template.jsx`),
      context: { slug: slug },
    })
  })
}
