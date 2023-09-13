import Swal from "sweetalert2";
import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  UPDATE_CHARACTER_DETAIL,
  ADD_CHARACTER_TO_FAVORITE,
  REMOVE_CHARACTER_TO_FAVORITE,
  
} from "./type";

const sesionStorage = localStorage.getItem("favorites");

const initialState = {
  characters: [],
  characterDetail: {},
  searchCharacters: "",
  favorites: sesionStorage ? JSON.parse(sesionStorage) : [],
  isLoading: true,
  loadingDetail: true,
  
};
const saveSesionInLocalstorage = (data) => {
  localStorage.setItem("favorites", JSON.stringify(data));
};

export const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: payload,
        isLoading: false,
      };
    case GET_CHARACTER:
      return {
        ...state,
        characterDetail: payload,
        loadingDetail: false,
      };
    case UPDATE_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: {},
        loadingDetail: true,
      };
    case ADD_CHARACTER_TO_FAVORITE:
      const findCharacter = state.favorites.find(
        (e) => e.name === payload.name
      );
      if (findCharacter) {
        return state;
      } else {
        const addCharacter = [...state.favorites, payload];
        saveSesionInLocalstorage(addCharacter);
        return {
          ...state,
          favorites: addCharacter,
        };
      }
    case REMOVE_CHARACTER_TO_FAVORITE:
      const updateFavorites = state.favorites.filter((e) => e.id !== payload);
      saveSesionInLocalstorage(updateFavorites);
      return {
        ...state,
        favorites: updateFavorites,
      };
   

    default:
      return state;
  }
};
