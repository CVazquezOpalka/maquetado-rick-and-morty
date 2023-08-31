import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./style";
import { removeCharacterToFavorite } from "../../redux/character/actions";
import { useDispatch, useSelector } from "react-redux";

export const CardFavorite = ({ character }) => {
  const navigate = useNavigate()
  const favorites = useSelector((state) => state.character.favorites);
  const dispatch = useDispatch();
 
  const handleRemoveFavorites = () => {
    alert(`se eliminara a ${character.name} de favoritos` )
    dispatch(removeCharacterToFavorite(character.id));

  };

  return (
    <CardContainer>
      <img src={character.image} alt={character.name} />
      <p>
        {character.name.length > 15
          ? character.name.slice(0, 15)
          : character.name}
      </p>
      <div className="btn-container">
        <button onClick={handleRemoveFavorites}>💔</button>
        <button onClick={() => navigate(`/character/${character.id}`)}>
          📃
        </button>
      </div>
    </CardContainer>
  );
};