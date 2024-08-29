import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectCard from './components/ProjectCard';
import Certificaciones from './pages/Certificaciones';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/proyectos" component={Proyectos} />
        <Route path="/certificaciones" component={Certificaciones} />
      </Switch>
    </Router>
  );
};

export default App;

