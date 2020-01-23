import React from "react"
import Image from "gatsby-image"

import styles from "./blog-card.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({
  blog: {
    slug,
    title,
    image: { fluid },
    published,
  },
}) => {
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={fluid} className={styles.img} alt="single post" />
        <AniLink fade className={styles.link} to={`blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
