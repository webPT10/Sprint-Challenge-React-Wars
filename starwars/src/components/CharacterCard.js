import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <div>
                <img></img>
                <div>
                    <h2>{props.attribute.name}</h2>
                    <p>Birth Year: {props.attribute.birth_year}</p>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;