import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<div>Home</div>} />
        <Route path="/recipes" element={<div>Recipes</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </Router>
  );
}

export default App;
