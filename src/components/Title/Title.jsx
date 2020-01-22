import React from "react"
import PropTypes from "prop-types"

import { TitleWrapper } from "./Title.styles"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span>{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Title
