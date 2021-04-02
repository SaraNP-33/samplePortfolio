import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav></Nav>
    </Router>
  );
}

export default App;
