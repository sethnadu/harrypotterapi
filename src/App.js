import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";


import AppRouter from "./Components/AppRouter.js"
import Nav from "./Components/Nav.js";

import './App.css';



function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
      <AppRouter />
    <Route exact path="/" />
   
    </div>
    </Router>
  );
}

export default App;
