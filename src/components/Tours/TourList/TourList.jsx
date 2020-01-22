import React, { useState } from "react"
import PropTypes from "prop-types"

import styles from "../FeaturedTours/items.module.css"

import Title from "../../Title/Title"
import TourCard from "../TourCard/TourCard"

const TourList = ({ tours: { edges } }) => {
  const [state] = useState({ tours: edges, sortedTours: edges })

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {state.sortedTours.map(({ node }) => {
          return <TourCard tour={node} key={node.contentful_id} />
        })}
      </div>
    </section>
  )
}

TourList.propTypes = {
  tours: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.PropTypes.object).isRequired,
  }),
}

export default TourList
