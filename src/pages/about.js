import React from 'react';
import { Layout, SEO } from '../components/imports'
import {Typography} from '@material-ui/core'

const About = () => {
  return (
    <Layout>
      <SEO title="about" />
      <div className="about">
        <h1>I am the About page</h1>
        <Typography>
          {`Aza.Cash is a network full of cheerful givers willingly accepting to
           help each other by donating among themeselves.

          We understand the esscence of giving in our present society, hence we are
          dedicated to puting a smile on each other faces through peer to peer donation`}
        </Typography>
      </div>
    </Layout>
  );
}

export default About;