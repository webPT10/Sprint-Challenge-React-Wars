import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

function CharacterList(){
    const [characterState, setCharacterState] = useState([]);

    useEffect(() => {
        axios 
            .get(`https://swapi.co/api/people/`)

            .then(response => {
                const characterInfo = response.data.results;
                console.log(characterInfo);
                setCharacterState(characterInfo);
            })

            .catch(error => {
                console.log ("Error, oh to error", error)
            })
    }, [])

    return(
        <div>
            {characterState.map(char => {
                return  (
                    <CharacterCard 
                        attribute = {char}
                    />
                )
            })}
        </div>
    )
}
export default CharacterList;