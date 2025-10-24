// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} [Your Name]. All rights reserved.</p>
    </footer>
  );
};

export default Footer;