import React from 'react';
import { Route } from "react-router-dom";


import AppRouter from "./Components/AppRouter.js"
import Nav from "./Components/Nav.js";

import './App.css';



function App() {

  return (
    <div className="App">
      <Nav />
    <Route exact path="/" />
    <Route exact path="/characters" component = {AppRouter} />
    <Route exact path="/spells" component = {AppRouter} />
    </div>
  );
}

export default App;