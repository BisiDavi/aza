import React from "react";
import { Typography } from '@material-ui/core';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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


const Banner3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "investment.jpg" }) {
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
          Get 50% ROI in 7 days Subsequently
        </Typography>
      </span>
      <span className="banner-img">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </span>
    </div>
  )
}

export default Banner3;
