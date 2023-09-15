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

  useEffect(() => {
    updateButtonStatus();
  }, [actualPage, totalPages]);

  return (
    <>
      {totalPages > 1 && (
        <PaginationContainer>
          <div className="pagination">
            <button
              className={`prev ${prevButtonDisabled ? "danger" : ""}`}
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
              className={`next ${nextButtonDisabled ? "danger" : ""}`}
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
      )}
    </>
  );
};
