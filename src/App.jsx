import React, { useEffect } from "react";
import MyRoutes from "./routers/routes";

import { getAllCharacters } from "./redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import { totalPages} from "./redux/page/action";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.actualPage);
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  useEffect(() => {
    dispatch(getAllCharacters(URL));
    dispatch(totalPages());
  }, [dispatch, page]);
  return (
    <>
      <MyRoutes/>
    </>
  );
};

export default App;
