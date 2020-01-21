import React from "react"
import styles from "./Banner.module.css"

import PropTypes from "prop-types"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Banner
