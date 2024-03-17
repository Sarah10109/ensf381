import React from 'react';

function Footer() {
  // Styles for the footer container
  const footerStyle = {
    display: 'flex',
    padding: '10px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>©2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
