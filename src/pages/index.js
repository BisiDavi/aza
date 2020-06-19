import React from "react";
import { Layout, Image, SEO, Typewrite } from '../components/imports';
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
      <SEO title="Home" />
      <div className={classes.banner}>
        <Image />
      </div>
      <span className={classes.typewrite}>
        <Typewrite />
      </span>
    </Layout >
  )
}

export default IndexPage
