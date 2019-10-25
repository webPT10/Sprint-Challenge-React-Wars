import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 2px dashed yellow;
    width: 600px;
    max-height: 600px;
    margin: 10px;
    
`

const CharacterCard = (props) => {
    return (
        <div>
            <Card>
                <img></img>
                <div>
                    <h2>{props.attribute.name}</h2>
                    <p>Birth Year: {props.attribute.birth_year}</p>
                </div>
            </Card>
        </div>
    )
}
export default CharacterCard;