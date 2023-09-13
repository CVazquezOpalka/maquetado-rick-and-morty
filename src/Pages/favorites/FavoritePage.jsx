import React from "react";
import { useSelector } from "react-redux";
import { CardFavorite } from "../../components/CardFavorites/CardFavorites";
import { FavoriteContainer } from "./style";

const FavoritePage = () => {
  const favoriteState = useSelector((state) => state.character.favorites);
  return (
    <FavoriteContainer>
      <div className="title">
        <h1>Personajes agregados a Favoritos</h1>
      </div>
      {favoriteState.length === 0 ? (
        <h1 style={{ textAlign: "center", width: "100%", lineHeight: "360px" }}>
          No se agregaron personajes a favoritos
        </h1>
      ) : (
        <div className="grid">
          {favoriteState.map((e) => (
          <CardFavorite key={e.id} character={e} />
          ))}
        </div>
      )}
    </FavoriteContainer>
  );
};

export default FavoritePage;
