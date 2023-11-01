import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles['footer-text']}> {currentYear} martingx89. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
