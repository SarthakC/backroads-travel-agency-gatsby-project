import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Title from "../../Title/Title.jsx"
import BlogCard from "../BlogCard/BlogCard.jsx"

import styles from "./blog.module.css"

export const query = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          published(formatString: "Do MMMM, YYYY ")
        }
      }
    }
  }
`

const BlogList = () => {
  const {
    posts: { edges },
  } = useStaticQuery(query)

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
