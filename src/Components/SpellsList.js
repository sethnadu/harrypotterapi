import React from "react";
import Styled from "styled-components";
import Spells from "./Spells.js";



function SpellsList({spells}) {

    console.log(spells)
    const CharacterContainer = Styled.div `
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: auto;

`;


    return (
        <div>
            {/* <CharacterForm /> */}
             <CharacterContainer>
                {Object.values(spells).map(spellType => {
                return  <Spells  spellType = {spellType} key = {spellType._id} />
                 })} 
            </CharacterContainer>
        </div>
    )
}

export default SpellsList;