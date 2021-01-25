import * as React from 'react';
import Layout from '../components/Layout';

import SEO from '../components/Seo';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <About />
    <Projects />
  </Layout>
);

export default IndexPage;
