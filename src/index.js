import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GamerRater } from './components/App.js';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GamerRater />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


