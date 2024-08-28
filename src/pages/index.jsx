import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import '../styles/globals.css'; // Asegúrate de que los estilos globales están bien importados

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
