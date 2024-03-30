import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Adjust the import path as necessary
import Productpage from './component/Productpage'; // Import Productpage component
import LoginPage from './component/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage includes Header and Footer */}
        {/* Define routes for other components, without including Header and Footer, as they are part of Homepage */}
        <Route path="/products" element={<Productpage />} /> {/* Use Productpage for the products route */}
        <Route path="/login" element={<LoginPage />} /> {/* LoginPage includes Header and Footer */}
      </Routes>
    </Router>
  );
}

export default App;
