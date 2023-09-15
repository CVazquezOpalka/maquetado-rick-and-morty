import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  searchCharacterOk,
  searchCharacter,
  updateSearch,
} from "../../redux/filters/actions";
import { ContainerSearch } from "./style";
import Swal from "sweetalert2";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const stateSearch = useSelector((state) => state.filters.searchCharacters);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmmit = (e) => {
    e.preventDefault();
    dispatch(searchCharacter);
    if (searchTerm.trim() === "") {
      Swal.fire(
        "",
        "Debes agregar un nombre para realizar la busqueda",
        "error"
      );
    } else {
      dispatch(searchCharacterOk(searchTerm));
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
