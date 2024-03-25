// File: App.js
// Group members: Suprova Hoque (30174388), Sarah Elmahdy(30170100)
// Date completed: March 25, 2024

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Adjust the import path as necessary
import Productpage from './component/Productpage'; // Import Productpage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage includes Header and Footer */}
        {/* Define routes for other components, without including Header and Footer, as they are part of Homepage */}
        <Route path="/products" element={<Productpage />} /> {/* Use Productpage for the products route */}
        <Route path="/login" /*element={ Login component}*/ />
      </Routes>
    </Router>
  );
}

export default App;
