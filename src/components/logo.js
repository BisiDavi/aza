import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql, Link } from "gatsby";
// import Img from "gatsby-image";
import '../styles/header.css';

const useStyles = makeStyles({
  siteTitle: {
    position: 'relative',
  }
});

const Logo = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query{
      logoImage: file(relativePath:{eq:"money.png"}){
        childImageSharp{
          fluid(maxWidth:200){
            ...GatsbyImageSharpFluid
          }
        }
      },
      sitename: site{
          siteMetadata{
            title
          }
        }      
     }
  `)
  return (
    <div className="logo">
      <div className={classes.siteTitle}>
        <h1>
          <Link to="/">
            {data.sitename.siteMetadata.title}
          </Link>
        </h1>
      </div>
      {/**<Img className={classes.logoimg} fluid={data.logoImage.childImageSharp.fluid} /> */}
    </div>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}


export default Logo;