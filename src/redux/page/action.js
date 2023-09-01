import {
  NEXT_PAGE,
  PREV_PAGE,
  TOTAL_PAGE,
  UPDATE_BUTTON_PAGINATION,
  UPDATE_PAGINATION,
} from "./type";

export const totalPages = () => async (dispatch) => {
  const URL = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    dispatch({
      type: TOTAL_PAGE,
      payload: data.info.pages,
    });
  } catch (error) {}
};

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const updatePagination = () => ({
  type: UPDATE_PAGINATION,
});

export const updateButtonPagination = (page) => ({
  type: UPDATE_BUTTON_PAGINATION,
  payload: page,
});
