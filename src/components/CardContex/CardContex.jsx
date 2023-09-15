import React from "react";
import { ContainerCardContex } from "./style";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import IMGGift from "../../assets/giftX.gif";

export const CardContext = () => {
  const statecharacters = useSelector((state) => state.character.characters);
  const loading = useSelector((state) => state.character.isLoading);
  return (
    <ContainerCardContex>
      {loading ? (
        <Loader />
      ) : statecharacters ? (
        statecharacters.map((e) => <Card key={e.id} character={e} />)
      ) : (
        <div className="img">
          <img src={IMGGift} alt="logo" />
          <h3>Personaje no encontrado</h3>
        </div>
      )}
    </ContainerCardContex>
  );
};
