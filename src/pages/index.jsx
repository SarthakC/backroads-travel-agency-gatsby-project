import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SimpleHero from "../components/SimpleHero/SimpleHero"
import Banner from "../components/Banner/Banner"

export default () => (
  <Layout>
    <SimpleHero >
      <Banner title="Continue exploring" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      <Link to='/tours' className='btn-white'>explore tours</Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
