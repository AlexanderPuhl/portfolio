import React from 'react';
import 'normalize.css';
import Navigation from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <main className="site-content">{children}</main>
      <Footer />
    </>
  );
}
