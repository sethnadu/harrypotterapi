import React from 'react';
import { Route } from "react-router-dom";


import AppRouter from "./Components/AppRouter.js"
import Nav from "./Components/Nav.js";

import './App.css';



function App() {

  return (
    <div className="App">
      <Nav />
      <AppRouter />
    <Route exact path="/#" />
   
    </div>
  );
}

export default App;
