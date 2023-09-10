import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchCharacter, updateSearch } from "../../redux/character/actions";
import { ContainerSearch } from "./style";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const stateSearch = useSelector((state) => state.character.searchCharacters);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("debes agregar un nombre para realizar la busqueda");
    } else {
      dispatch(searchCharacter(searchTerm));
      setSearchTerm("");
    }
  };
  return (
    <ContainerSearch>
      <form onSubmit={handleSubmmit}>
        <div className="input-form">
          <input
            type="text"
            placeholder="Busca tu personaje favorito..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>buscar</button>
        </div>
      </form>
      {stateSearch.trim() !== "" && (
        <div className="oculto">
          <p>Personajes Encontrados</p>
          <button onClick={() => dispatch(updateSearch())}>Reset</button>
        </div>
      )}
    </ContainerSearch>
  );
};
