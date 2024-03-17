import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Adjust the import path as necessary
// Import other components for specific routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage includes Header and Footer */}
        {/* Define routes for other components, without including Header and Footer, as they are part of Homepage */}
        <Route path="/products" /*element={ Products component }*/ />
        <Route path="/login" /*element={ Login component}*/ />
      </Routes>
    </Router>
  );
}

export default App;
