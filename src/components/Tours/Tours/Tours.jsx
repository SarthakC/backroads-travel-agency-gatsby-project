import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TourList from "../TourList/TourList"

export const query = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const Tours = () => {
  const { tours } = useStaticQuery(query)
  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

export default Tours
