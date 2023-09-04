import React from "react";
import { ContainerCardContex } from "./style";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";

export const CardContext = () => {
  const statecharacters = useSelector((state) => state.character.characters);
  const loading = useSelector((state) => state.character.isLoading);
  return (
    <ContainerCardContex>
      {loading ? (
        <h1>cargando</h1>
      ) : statecharacters ? (
        statecharacters.map((e) => <Card key={e.id} character={e} />)
      ) : (
        <h1>Not Found</h1>
      )}
    </ContainerCardContex>
  );
};
