import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";


import AppRouter from "./Components/AppRouter.js"
import CharacterList from "./Components/CharacterList";
import SpellsList from "./Components/SpellsList.js";
import Nav from "./Components/Nav.js";

import './App.css';



function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
    <Route exact path="/" />
    <Route path="/names" component ={AppRouter} />
    <Route path="/spells" component ={AppRouter} />
   
    </div>
    </Router>
  );
}

export default App;
