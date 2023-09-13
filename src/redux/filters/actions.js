import {
  GENDER_FILTER,
  SPECIES_FILTER,
  STATUS_FILTER,
  UPDATE_FILTER,
  SEARCH_CHARACTER,
  SEARCH_CHARACTER_OK,
  UPDATE_SEARCH,
} from "./type";

export const genderFilter = (gender) => ({
  type: GENDER_FILTER,
  payload: gender,
});

export const speciesFilter = (species) => ({
  type: SPECIES_FILTER,
  payload: species,
});

export const statusFilter = (status) => ({
  type: STATUS_FILTER,
  payload: status,
});

export const updateFilter = () => ({
  type: UPDATE_FILTER,
});

export const searchCharacter = () => ({
  type: SEARCH_CHARACTER,
});
export const searchCharacterOk = (character) => ({
  type: SEARCH_CHARACTER_OK,
  payload: character,
});

export const updateSearch = () => ({
  type: UPDATE_SEARCH,
});
