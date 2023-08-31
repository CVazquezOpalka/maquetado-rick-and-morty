import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  UPDATE_CHARACTER_DETAIL,
  ADD_CHARACTER_TO_FAVORITE,
  REMOVE_CHARACTER_TO_FAVORITE,
} from "./type";

export const getAllCharacters = () => async (dispatch) => {
  const URL = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCharacter = (id) => async (dispatch) => {
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: GET_CHARACTER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCharacterDetail = () => ({
  type: UPDATE_CHARACTER_DETAIL,
});

export const addCharacterToFavorite = (character) => ({
  type: ADD_CHARACTER_TO_FAVORITE,
  payload: character,
});

export const removeCharacterToFavorite = (id) => ({
  type: REMOVE_CHARACTER_TO_FAVORITE,
  payload: id,
});
