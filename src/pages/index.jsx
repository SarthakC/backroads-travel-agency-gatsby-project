import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import About from "../components/Home/About/About"
import Services from "../components/Home/Services/Services"
import StyledHero from "../components/StyledHero/StyledHero"
import FeaturedTours from "../components/Tours/FeaturedTours/FeaturedTours"
import SEO from "../components/SEO/SEO"

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

const index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      >
        <AniLink to="/tours" className="btn-white" fade>
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default index
