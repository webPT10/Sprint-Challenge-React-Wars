import React from 'react';
import styled, { keyframes } from 'styled-components';

const Card = styled.div`
    border: 2px dashed yellow;
    width: 600px;
    max-height: 600px;
    margin: 10px;
    transition: transform 0.2s ease-in;
    color: black;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px) scale(1.05);
        color: black;
        border:1px dashed black;
      }
`;
const glow = keyframes`
0% {
    text-shadow: 0 0 10px rgba(255,255,0,0.3),
                 0 0 20px rgba(255,255,0,0.3),
                 0 0 22px  rgba(255,255,0,0.3),
                 0 0 40px  rgba(66,220,219,.8),
                 0 0 60px  rgba(66,220,219,.8),
                 0 0 80px  rgba(66,220,219,.5),
                 0 0 100px rgba(66,220,219,.5),
                 0 0 140px rgba(66,220,219,.5),
                 0 0 200px rgba(66,220,219,.5);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,0,0.3),
                 0 0 8px rgba(255,255,0,0.3),
                 0 0 10px rgba(255,255,0,0.3),
                 0 0 20px rgba(66,220,219,.8),
                 0 0 30px rgba(66,220,219,.8),
                 0 0 40px rgba(66,220,219,.8),
                 0 0 50px rgba(66,220,219,.5),
                 0 0 80px rgba(66,220,219,.5);
  }
`;
const Glow = styled.h1`
    color: yellow;
    font-size: 1rem;
    text-align: center;
    animation: ${glow} 2s infinite
`;
const blink = keyframes`
    0% {opacity: 0}
    49%{opacity: 0}
    50% {opacity: 1}
`
const Title = styled.p`
    color: black;
    animation: ${blink} 4s infinite;
`;

const CharacterCard = (props) => {
    return (
        <div>
            <Card>
                <img></img>
                <div>
                    <Glow>{props.attribute.name}</Glow>
                    <Title>Birth Year: {props.attribute.birth_year}</Title>
                </div>
            </Card>
        </div>
    )
}
export default CharacterCard;