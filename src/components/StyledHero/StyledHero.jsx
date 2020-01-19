import React from "react"
import HeroStyled from "./Styledhero.styles"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <HeroStyled fluid={img} home={home}>
      {children}
    </HeroStyled>
  )
}

export default StyledHero
