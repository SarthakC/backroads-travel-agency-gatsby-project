import React from "react"
import Title from "../../Title/Title"
import styles from "./About.module.css"
import img from "../../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            justo quis nunc interdum aliquet quis sit amet leo. Integer
            hendrerit nibh in nisi convallis aliquet. In hac habitasse platea
            dictumst.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            justo quis nunc interdum aliquet quis sit amet leo. Integer
            hendrerit nibh in nisi convallis aliquet. In hac habitasse platea
            dictumst.
          </p>
          <button className="btn-primary" type="button">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
