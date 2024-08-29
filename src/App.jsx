import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certificaciones from './pages/Certificaciones';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre-mi" component={About} />
          <Route path="/certificaciones" component={Certificaciones} />
          {/* Agrega otras rutas según sea necesario */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
