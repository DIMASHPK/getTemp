import React from "react";
import { useSelector } from "react-redux";
import ErrorHint from "../helpers/ErrorHint/ErrorHint";
import Preloader from "../helpers/preloader/Preloader";
import Css from "./Main.module.css";

const Main = ({ children }) => {
  const { error, isFetching } = useSelector(({ city }) => city);

  return (
    <main className={Css.mainContainer}>
      {children}
      {isFetching && <Preloader />}
      {error?.message && <ErrorHint message={error.message} />}
    </main>
  );
};

export default Main;
