import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        twitter
        image
      }
    }
  }
`

const SEO = ({ pageTitle }) => {
  const {
    site: {
      siteMetadata: { title, description, author, siteUrl, twitter, image },
    },
  } = useStaticQuery(query)
  return (
    <Helmet
      title={` ${pageTitle} | ${title}`}
      description={description}
      htmlAttributes={{ lang: "en" }}
      image={image}
    >
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
