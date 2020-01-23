import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from "../../components/Title/Title"
import BlogCard from "../../components/Blog/BlogCard/BlogCard"

import styles from "../../components/Blog/BlogList/blog.module.css"

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = ({
  data: {
    posts: { edges },
  },
}) => {
  return (
    <section className={styles.blog}>
      <Title title="latest" subtitle="posts" />
      <div className={styles.center}>
        {edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
