import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import '../styles/header.css';

const useStyles = makeStyles({
  logo: {
    position: 'absolute',
    top: '30px'
  }
});

const Logo = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query{
      logoImage: file(relativePath:{eq:"money.jpg"}){
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
      <h1>
        <Link to="/">
          {data.sitename.siteMetadata.title}
        </Link>
      </h1>
      <Img className={classes.logo} fluid={data.logoImage.childImageSharp.fluid} />
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