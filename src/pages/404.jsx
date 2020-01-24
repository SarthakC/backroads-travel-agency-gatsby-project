import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner/Banner.jsx"
import SEO from "../components/SEO/SEO"

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
