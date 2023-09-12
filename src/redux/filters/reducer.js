import {
  GENDER_FILTER,
  STATUS_FILTER,
  SPECIES_FILTER,
  UPDATE_FILTER,
} from "./type";

const initialState = {
  gender: "",
  status: "",
  species: "",
  loadingFilters: true,
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
    default:
      return state;
  }
};
