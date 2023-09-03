import {
  GENDER_FILTER,
  SPECIES_FILTER,
  STATUS_FILTER,
  UPDATE_FILTER,
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
