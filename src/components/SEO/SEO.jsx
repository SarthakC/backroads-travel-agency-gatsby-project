import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        siteUrl
        twitter
        image
      }
    }
  }
`

const SEO = ({ title }) => {
  const {
    site: {
      siteMetadata: { siteTitle, description, author, siteUrl, twitter, image },
    },
  } = useStaticQuery(query)
  return (
    <Helmet
      title={` ${title.toUpperCase()} | ${siteTitle}`}
      description={description}
      htmlAttributes={{ lang: "en" }}
      image={image}
    >
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

export default SEO
