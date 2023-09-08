import React, { useEffect } from "react";
import MyRoutes from "./routers/routes";
import { getAllCharacters } from "./redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import { totalPages } from "./redux/page/action";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.actualPage);
  const search = useSelector((state) => state.character.searchCharacters);
  const { status, gender, species } = useSelector((state) => state.filters);
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    dispatch(getAllCharacters(URL));
    dispatch(totalPages());
  }, [dispatch, page, search, status, gender, species]);
  return (
    <>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
