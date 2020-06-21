import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { Typography } from '@material-ui/core';
import '../../styles/banner.css';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Banner1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "grow-gold.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <span className="banner-text">
        <Typography variant="h4">
          Invest your Money Today
      </Typography>
      </span>
      <span className="banner-img">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </span>
    </div>
  )
}

export default Banner1;
