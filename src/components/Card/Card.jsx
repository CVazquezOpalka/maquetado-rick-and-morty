import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./style";

export const Card = ({ character }) => {
  return (
    <Link style={{textDecoration:"none"}} to={`/character/${character.id}`}>
      <CardContainer>
        <img src={character.image} alt={character.name} />
        <p>
          {character.name.length > 15
            ? character.name.slice(0, 15)
            : character.name}
        </p>
      </CardContainer>
    </Link>
  );
};
