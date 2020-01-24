import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from "../../components/Title/Title"
import BlogCard from "../../components/Blog/BlogCard/BlogCard"
import Layout from "../../components/Layout/Layout"

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
  pageContext: { currentPage, numPages },
}) => {
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
                key={i}
              >
                {i + 1}
              </AniLink>
            )
          })}
        </section>
      </section>
    </Layout>
  )
}

export default BlogList
