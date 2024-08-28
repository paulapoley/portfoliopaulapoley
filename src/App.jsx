import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Proyectos from './Proyectos'; 
import Certificaciones from './Certificaciones'; 

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
