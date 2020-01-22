import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaMap } from "react-icons/fa"

import styles from "./TourCard.module.css"

const TourCard = ({ tour: { name, price, country, days, images, slug } }) => {
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} /> {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

TourCard.propTypes = {
  tour: PropTypes.object.isRequired,
}

export default TourCard
