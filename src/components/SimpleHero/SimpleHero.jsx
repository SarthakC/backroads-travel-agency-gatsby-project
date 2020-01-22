import React from "react"
import PropTypes from "prop-types"

const SimpleHero = ({ children }) => {
  return <header className="defaultHero">{children}</header>
}

SimpleHero.propTypes = { children: PropTypes.node.isRequired }

export default SimpleHero
