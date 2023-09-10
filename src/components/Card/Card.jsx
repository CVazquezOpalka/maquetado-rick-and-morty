import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardContainer } from "./style";
import { addCharacterToFavorite } from "../../redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export const Card = ({ character }) => {
  const favorites = useSelector((state) => state.character.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blackHeart = "🖤";
  const redHeart = "❤️";
  const names = favorites.map((e) => e.name);
  const heart = names.includes(character.name) ? redHeart : blackHeart;

  const handleFavorites = () => {
    if (names.includes(character.name)) {
      Swal.fire({
        icon: "error",
        html: `<p>el personaje ${character.name} ya se encuentra en favoritos</p>`,
      });
      return;
    } else {
      dispatch(addCharacterToFavorite(character));
      Swal.fire({
        icon: "success",
        title: "Favorites",
        html: `<p>el personaje ${character.name} se agrego correctamente</p>`,
      });
    }
  };

  return (
    <CardContainer>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
      </Link>

      {character.status === "Alive" ? (
        <span className="badge alive">{character.status}</span>
      ) : character.status === "Dead" ? (
        <span className="badge dead">{character.status}</span>
      ) : (
        <span className="badge unknow">{character.status}</span>
      )}
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
