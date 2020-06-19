import React from 'react';
import { Layout, SEO } from '../components/imports'

const About = () => {
  return (
    <Layout>
      <SEO title="about" />
      <div className="about">
        <h1>I am the About page</h1>
      </div>
    </Layout>
  );
}

export default About;