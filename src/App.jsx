import React, { useEffect } from "react";
import MyRoutes from "./routers/routes";
import { getAllCharacters } from "./redux/character/actions";
import { useDispatch, useSelector } from "react-redux";
import { totalPages } from "./redux/page/action";
import { firebaseAuth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector((state) => state.pagination.actualPage);
  const search = useSelector((state) => state.character.searchCharacters);
  const { status, gender, species } = useSelector((state) => state.filters);
  const login = useSelector((state) => state.user.login);
  const URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    dispatch(getAllCharacters(URL));
    dispatch(totalPages(URL));
  }, [dispatch, page, search, status, gender, species]);
  useEffect(() => {
    if (login) {
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) navigate("/home");
        else navigate("/");
      });
    }
  }, [login]);
  return (
    <>
      <MyRoutes />
    </>
  );
};

export default App;
