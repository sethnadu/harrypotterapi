import React from "react";

import AppRouter from "./AppRouter.js";
import Styled from "styled-components";

const nameArray = [];
const nameA = nameArray.filter((name) => {
    return String(name).startsWith("A");
});

 
    console.log(nameA)
  console.log(nameArray)


function FilterCharacter({character}) {
   const {name, house, role, bloodStatus, school, deathEater, dumbledoresArmy, orderOfThePhoenix, species} = character;
 
   
  nameArray.push(name); 
        return (
            <div>
                
            </div>
        )
}

export default FilterCharacter;