import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from "./single-blog.module.css"

import Layout from "../../components/Layout/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "Do MMMM, YYYY")
      text {
        json
      }
    }
  }
`

const Blog = ({
  data: {
    post: {
      title,
      published,
      text: { json: richTextJson },
    },
  },
}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": ({
        data: {
          target: {
            fields: { file },
          },
        },
      }) => {
        return <img src={file["en-US"].url} />
      },
      "embedded-entry-block": ({
        data: {
          target: {
            fields: { title, image, text },
          },
        },
      }) => {
        console.log(image)
        return (
          <div>
            <h1>{title["en-US"]}</h1>
            <img
              src={image["en-US"].fields.file["en-US"].url}
              alt=""
              width="400"
            />
            {documentToReactComponents(text["en-US"])}
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(richTextJson, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            All posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
