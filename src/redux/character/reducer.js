import {
  GET_ALL_CHARACTERS,
  GET_CHARACTER,
  UPDATE_CHARACTER_DETAIL,
} from "./type";

const initialState = {
  characters: [],
  characterDetail: {},
  isLoading: true,
  loadingDetail: true,
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
    default:
      return state;
  }
};
