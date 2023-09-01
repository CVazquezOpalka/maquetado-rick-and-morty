import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { PaginationContainer } from "./style";
import { updateButtonPagination } from "../../redux/page/action";

export const Pagination = () => {
  const pagination = useSelector((state) => state.pagination.totalPages);
  const dispatch = useDispatch();
  return (
    <PaginationContainer>
      <ReactPaginate
        className="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        pageCount={pagination}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="next"
        previousClassName="prev"
        onPageChange={(data) => {
          dispatch(updateButtonPagination(data.selected + 1));
        }}
      />
    </PaginationContainer>
  );
};
