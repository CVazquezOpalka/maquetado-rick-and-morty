import React, { useEffect } from "react";
import MyRoutes from "./routers/routes";
import { getAllCharacters } from "./redux/character/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  return (
    <>
      <MyRoutes />
    </>
  );
};

export default App;
