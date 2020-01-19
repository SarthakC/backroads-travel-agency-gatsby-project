import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../../Title/Title"
import styles from "./About.module.css"

export const getAbout = graphql`
  {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            justo quis nunc interdum aliquet quis sit amet leo. Integer
            hendrerit nibh in nisi convallis aliquet. In hac habitasse platea
            dictumst.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            justo quis nunc interdum aliquet quis sit amet leo. Integer
            hendrerit nibh in nisi convallis aliquet. In hac habitasse platea
            dictumst.
          </p>
          <button className="btn-primary" type="button">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
