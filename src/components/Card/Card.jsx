import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./style";
import { addCharacterToFavorite } from "../../redux/character/actions";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ character }) => {
  const favorites = useSelector((state) => state.character.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blackHeart = "🖤";
  const redHeart = "❤️";
  const names = favorites.map((e) => e.name);
  const heart = names.includes(character.name) ? redHeart : blackHeart;

  const handleFavorites = () => {
    dispatch(addCharacterToFavorite(character));
  };

  return (
    <CardContainer>
      <img src={character.image} alt={character.name} />
      <p>
        {character.name.length > 15
          ? character.name.slice(0, 15)
          : character.name}
      </p>
      <p>{character.location.name}</p>
      <div className="btn-container">
        <button onClick={handleFavorites}>{heart}</button>
        <button onClick={() => navigate(`/character/${character.id}`)}>
          📃
        </button>
      </div>
    </CardContainer>
  );
};
