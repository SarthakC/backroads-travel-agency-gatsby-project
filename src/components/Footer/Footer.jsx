import React from "react"
import { Link } from "gatsby"

import { FaRProject } from "react-icons/fa"

import styles from "./Footer.module.css"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons.jsx"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to="item.mpat">
              {item.text}
            </Link>
          )
        })}
      </div>
      <dir className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank">
              {item.icon}
            </a>
          )
        })}
      </dir>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company
      </div>
    </footer>
  )
}

export default Footer
