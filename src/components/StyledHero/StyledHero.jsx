import React from "react"

import PropTypes from "prop-types"

import HeroStyled from "./Styledhero.styles"

const StyledHero = ({ img, children, home }) => {
  return (
    <HeroStyled fluid={img} home={home}>
      {children}
    </HeroStyled>
  )
}

StyledHero.propTypes = {
  children: PropTypes.node,
  img: PropTypes.object.isRequired,
  home: PropTypes.string,
}

export default StyledHero
