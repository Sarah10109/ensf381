import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Styles for the header container
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  };

  // Styles for the top section containing the logo and company name
  const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px', // Adds space between the top section and the navigation links
  };

  // Styles for the navigation links container
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%', // Makes the navigation span the entire width of the page
  };

  return (
    <header style={headerStyle}>
      <div style={topSectionStyle}>
        {/* Logo */}
        <div>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" style={{ height: '100px' }} />
        </div>
        {/* Company Name */}
        <div>
          <h2>Company Name</h2>
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;