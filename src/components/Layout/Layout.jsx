import React from "react"

import PropTypes from "prop-types"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

Layout.protoType = { children: PropTypes.node.isRequired }

export default Layout
