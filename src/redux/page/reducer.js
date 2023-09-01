import {
  PREV_PAGE,
  NEXT_PAGE,
  TOTAL_PAGE,
  UPDATE_PAGINATION,
  UPDATE_BUTTON_PAGINATION,
} from "./type";

const initialState = {
  totalPages: "",
  actualPage: 1,
};

export const PaginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOTAL_PAGE:
      return {
        ...state,
        totalPages: payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        actualPage: state.actualPage + 1,
      };
    case PREV_PAGE:
      if (actualPage > 1) {
        return state;
      }
      return {
        ...state,
        actualPage: state.actualPage - 1,
      };
    case UPDATE_BUTTON_PAGINATION:
      return {
        ...state,
        actualPage: payload,
      };
    case UPDATE_PAGINATION:
      return {
        ...state,
        actualPage: 1,
      };

    default:
      return state;
  }
};
