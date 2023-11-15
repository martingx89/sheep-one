import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p> {currentYear} martingx89. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
