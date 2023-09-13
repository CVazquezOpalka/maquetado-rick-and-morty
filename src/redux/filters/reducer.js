import {
  GENDER_FILTER,
  STATUS_FILTER,
  SPECIES_FILTER,
  UPDATE_FILTER,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_OK,
  UPDATE_SEARCH,
} from "./type";

const initialState = {
  gender: "",
  status: "",
  species: "",
  searchCharacters: "",
  loadingFilters: true,
  searchLoading: false,
};

export const filterReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GENDER_FILTER:
      return {
        ...state,
        gender: payload,
        loadingFilters: false,
      };
    case STATUS_FILTER:
      return {
        ...state,
        status: payload,
        loadingFilters: false,
      };
    case SPECIES_FILTER:
      return {
        ...state,
        species: payload,
        loadingFilters: false,
      };
    case UPDATE_FILTER:
      return {
        ...state,
        gender: "",
        species: "",
        status: "",
        loadingFilters: true,
      };
    case SEARCH_CHARACTER:
      return {
        ...state,
        searchLoading: true,
      };
    case SEARCH_CHARACTER_OK:
      return {
        ...state,
        searchCharacters: payload,
        searchLoading: false,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        searchCharacters: "",
        searchLoading: false,
      };
    default:
      return state;
  }
};
