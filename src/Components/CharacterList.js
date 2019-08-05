import React from "react";
import Styled from "styled-components";
import Characters from "./Characters.js";
import { CharacterForm } from "./form.js";

function CharacterList({characters}) {
    const CharacterContainer = Styled.div `
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: auto;

`   
    const CharactersTitle = Styled.h2 `
    color: #8d0901;
    font-size: 2.6rem;
`
    const CharactersSubTitle = Styled.p `
    color: #f8c20e;
    font-size: 2rem;
    
`


    return (
        <div>
            {/* <CharacterForm /> */}
            <CharactersTitle>Characters:</CharactersTitle>
            <CharactersSubTitle>Sorted Alphabetically by Last Name</CharactersSubTitle>
             <CharacterContainer>
                {Object.values(characters).map(character => {
                return  <Characters  character = {character} key = {character.name} />
                 })} 
            </CharacterContainer>
        </div>
    )
}

export default CharacterList;