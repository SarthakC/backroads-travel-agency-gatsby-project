import React from "react"
import { faAdobe } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <h1>I am navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/rooms">Rooms</Link>
    </div>
  )
}

export default Navbar
