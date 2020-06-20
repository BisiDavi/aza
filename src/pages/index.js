import React from "react";
import { Layout, SEO, Typewrite, AzaTimeline, Autoslider } from '../components/imports';
import { makeStyles } from '@material-ui/core/styles';


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
    <Layout>
      <SEO title="Home-- Get 50% ROI when you invest" />

      <div className={classes.banner}>
        <Autoslider/>
        
      </div>
      <span className={classes.typewrite}>
        <Typewrite />
      </span>
      <span className={classes.timeline}>
        <AzaTimeline />
      </span>
    </Layout >
  )
}

export default IndexPage
