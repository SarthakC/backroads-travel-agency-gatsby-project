import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero/StyledHero"
import BlogList from "../components/Blog/BlogList/BlogList"
import SEO from "../components/SEO/SEO"

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default blog
