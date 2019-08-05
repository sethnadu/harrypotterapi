import React, {useState, useEffect} from "react";

export function CharacterForm({character}) {
   const {name} = character;

    console.log(name)
    return(
        <form>
            <input type= "search" placeholder = "Find Character" />
        </form>
    )
}
