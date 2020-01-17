import React from "react"

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

export default Title
