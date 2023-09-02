import React, { useEffect } from "react";
import MyRoutes from "./routers/routes";

import { getAllCharacters } from "./redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import { totalPages } from "./redux/page/action";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.actualPage);
  const search = useSelector((state) => state.character.searchCharacters);
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;

  useEffect(() => {
    dispatch(getAllCharacters(URL));
    dispatch(totalPages());
  }, [dispatch, page,search]);
  return (
    <>
      <MyRoutes />
    </>
  );
};

export default App;
