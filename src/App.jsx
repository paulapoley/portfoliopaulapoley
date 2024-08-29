import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Certificaciones from './pages/Certificaciones';
import About from './pages/About'; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/certificaciones" element={<Certificaciones />} /> 
      </Routes>
    </Router>
  );
};

export default App;
