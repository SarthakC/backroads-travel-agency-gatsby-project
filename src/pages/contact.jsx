import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import Contact from "../components/Contact/Contact"

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default contact
