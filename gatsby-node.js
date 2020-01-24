exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      tours,
      posts: { edges: postEdges },
    },
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
      context: { slug },
    })
  })

  postEdges.forEach(({ node: { slug } }) => {
    createPage({
      path: `blog/${slug}`,
      component: require.resolve(
        `./src/templates/blog-template/blog-template.jsx`
      ),
      context: { slug },
    })
  })

  const postPerPage = 6
  const numPages = Math.ceil(postEdges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: require.resolve(
        `./src/templates/blog-list-template/blog-list-template.jsx`
      ),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
