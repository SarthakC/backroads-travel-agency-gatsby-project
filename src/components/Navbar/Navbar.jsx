import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaAlignRight } from "react-icons/fa"

import styles from "./Navbar.module.css"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons.jsx"
import logo from "../../images/logo.svg"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleNav = () => {
    setOpen(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="background logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a href={item.url} key={index} target="blank">
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
