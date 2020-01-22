import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Tours from "../components/Tours/Tours/Tours"

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

tours.propTypes = {
  data: PropTypes.object.isRequired,
}

export default tours
