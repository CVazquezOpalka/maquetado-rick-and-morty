import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./style";
import { removeCharacterToFavorite } from "../../redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export const CardFavorite = ({ character }) => {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.character.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorites = () => {
    Swal.fire({
      icon: "question",
      title: "Favorites",
      html: `<p> Estas seguro de eliminar a ${character.name} de favoritos?</p>`,
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "blue",
      confirmButtonText: "Si",
      confirmButtonColor: "red",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch(removeCharacterToFavorite(character.id));
        Swal.fire(
          "Favorites",
          `El personaje ${character.name} fue eliminado`,
          "success"
        );
      } else if (response.isDenied) {
        Swal.fire(
          "Favorites",
          `El personaje ${character.name} no fue eliminado`,
          "error"
        );
      } else {
        Swal.fire("Error", "ocurrio algo inesperado", "error");
      }
    });
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
