exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: { tours, posts },
  } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  tours.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `tours/${slug}`,
      component: require.resolve(
        `./src/templates/tour-template/tour-template.jsx`
      ),
      context: { slug: slug },
    })
  })

  posts.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `blog/${slug}`,
      component: require.resolve(
        `./src/templates/blog-template/blog-template.jsx`
      ),
      context: { slug: slug },
    })
  })
}
