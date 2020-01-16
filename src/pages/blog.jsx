import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

const blog = () => {
  return (
    <Layout>
      Hello from blog <Link to="/">back home</Link>
    </Layout>
  )
}

export default blog
