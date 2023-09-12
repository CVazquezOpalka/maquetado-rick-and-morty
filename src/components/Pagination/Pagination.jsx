import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { PaginationContainer } from "./style";
import { nextPage, prevPage } from "../../redux/page/action";

export const Pagination = () => {
  const { totalPages, actualPage } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);

  const updateButtonStatus = () => {
    setPrevButtonDisabled(actualPage <= 1);
    setNextButtonDisabled(actualPage >= totalPages);
  };

  // Llama a la función para actualizar el estado de los botones cuando se renderiza el componente
  useEffect(() => {
    updateButtonStatus();
  }, [actualPage, totalPages]);

  return (
    <PaginationContainer>
      <div className="pagination">
        <button
          className="prev"
          onClick={() => {
            dispatch(prevPage());
            updateButtonStatus();
          }}
          disabled={prevButtonDisabled}
        >
          Prev
        </button>
        <h3 className="page-item">
          <span>{actualPage}</span> de {totalPages}
        </h3>
        <button
          className="next"
          onClick={() => {
            dispatch(nextPage());
            updateButtonStatus();
          }}
          disabled={nextButtonDisabled}
        >
          Next
        </button>
      </div>
    </PaginationContainer>
  );
};
