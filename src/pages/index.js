import React from "react";
import { Layout, SEO, Typewrite, AzaTimeline, Autoslider } from '../components/imports';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import SpringLoader from "react-spring-loaders";

const settings = {
  rebound: {
    tension: 14,
    friction: 10
  },
  spinner: {
    id: "spinner",
    radius: 90,
    sides: 6,
    depth: 8,
    colors: {
      background: "#00272C",
      stroke: null,
      base: null,
      child: "#02C39A"
    },
    alwaysForward: true, // When false the spring will reverse normally.
    restAt: null, // A number from 0.1 to 0.9 || null for full rotation
    renderBase: false
  }
};


const useStyles = makeStyles({
  typewrite: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
  banner: {
    marginBottom: 20
  }
});


const IndexPage = () => {
  const classes = useStyles()
  return (
    <>
      <SpringLoader settings={settings} />
      <Layout>
        <Helmet>
          <script src={withPrefix('pace.js')} type="text/javascript" />
          <link href={withPrefix('pace.css')} type="text/css" rel="stylesheet" />
        </Helmet>
        <SEO title="Home - Get 50% ROI when you invest" />

        <div className={classes.banner}>
          <Autoslider />
        </div>
        <span className={classes.typewrite}>
          <Typewrite />
        </span>
        <span className={classes.timeline}>
          <AzaTimeline />
        </span>
      </Layout >
    </>
  )
}

export default IndexPage
