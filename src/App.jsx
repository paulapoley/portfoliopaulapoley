import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambia Switch por Routes
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certificaciones from './pages/Certificaciones';
import './Layout.css'; 

const App = () => {
  return (
    <Router>
      <div className="main-container"> 
        <Navbar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/certificaciones" element={<Certificaciones />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
