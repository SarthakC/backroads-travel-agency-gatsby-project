import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./Footer.module.css"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons.jsx"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <AniLink swipe direction="up" key={index} to={item.path}>
              {item.text}
            </AniLink>
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
        copyright &copy; backroads travel company {new Date().getFullYear()} All
        Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
