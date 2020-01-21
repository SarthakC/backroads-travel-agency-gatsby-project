import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Tours from "../components/Tours/Tours/Tours"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

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

export default tours
