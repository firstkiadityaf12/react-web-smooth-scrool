import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import React from 'react';

//import pages
import Home from "./pages"

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
