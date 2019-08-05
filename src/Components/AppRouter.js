import React, { useState, useEffect } from 'react';
import axios from "axios";
import Styled from "styled-components";
import CharacterList from "./CharacterList";
import SpellsList from "./SpellsList.js";

import { Route } from "react-router-dom";


function AppRouter() {

const [characters, setCharacters] = useState("");
const [houses, setHouses] = useState("");
const [spells, setSpells] = useState("");
const [sortingHat, setSortingHat] = useState("");

useEffect(() => {
  axios.all([
    axios.get(`https://www.potterapi.com/v1/characters/`, {
      params: { 
        key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
        }, []),
    axios.get(`https://www.potterapi.com/v1/houses/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
          }, []),
    axios.get(`https://www.potterapi.com/v1/spells/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
          }, []),
    axios.get(`https://www.potterapi.com/v1/sortingHat/`, {
        params: { 
          key: "$2a$10$BIGaxlF6Fk8YJyoCnLOoqerGil4ZbZCATrYMbvMqhXp3sROZn5TnO"}
          }, [])

    ], [])
    .then(axios.spread(function (apicharacters, apihouses, apispells, apisortinghat ) {
      setCharacters(apicharacters.data)
      // console.log(apihouses.data)
      setSpells(apispells.data)
      // console.log(apisortinghat.data)
    }), [])
    .catch(error => {
        console.log("Avada Kadabra", error)
    })
}, [])

  return (
    <div>
     <Route path="/characters" render = {props => {
       return ( <CharacterList {...props} characters = {characters} />
    )} }/> 
    <Route  path="/spells" render = {props => {
       return ( <SpellsList {...props} spells = {spells} />
    )} }/> 
      
     

    </div>
  );
}

export default AppRouter;