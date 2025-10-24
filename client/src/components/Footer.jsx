// client/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {year} Atharv Bhosale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;