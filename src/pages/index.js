import React from "react"
import { Link } from "gatsby"
import { Layout, Image, SEO } from '../components/imports'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
