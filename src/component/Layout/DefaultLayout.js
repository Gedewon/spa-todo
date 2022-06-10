import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import style from './DefaultLayout.module.css';

const DefaultLayout = ({ children }) => (
  <div className={style.main}>
    <Navbar />
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
