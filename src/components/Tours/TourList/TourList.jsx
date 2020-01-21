import React, { useState } from "react"
import styles from "../FeaturedTours/items.module.css"
import Title from "../../Title/Title"
import TourCard from "../TourCard/TourCard"

const TourList = ({ tours: { edges } }) => {
  const [state, setState] = useState({ tours: edges, sortedTours: edges })

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {state.sortedTours.map(({ node }) => {
          return <TourCard tour={node} key={node.contenful_id} />
        })}
      </div>
    </section>
  )
}

export default TourList
