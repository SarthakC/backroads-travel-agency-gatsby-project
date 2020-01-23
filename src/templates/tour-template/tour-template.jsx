import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaMoneyBillWave, FaMap } from "react-icons/fa"

import Layout from "../../components/Layout/Layout"
import StyledHero from "../../components/StyledHero/StyledHero.jsx"
import Day from "../../components/SingleTour/Day/Day.jsx"

import styles from "./template.module.css"

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Template = ({
  data: {
    tour: {
      name,
      price,
      country,
      days,
      start,
      description: { description },
      journey,
      images: [mainImage, ...tourImages],
    },
  },
}) => {
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration: {days}</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map(({ day, info }, index) => {
              return <Day key={index} day={day} info={info} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Back to Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default Template
