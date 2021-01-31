import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { beforeSubmitActionCreate } from "../../store/cityReducer";
import { getCityThunkCreator } from "../../store/cityThunks";
import Css from "./SearchBar.module.css";

const SearchBar = ({ value, handleChangeValue }) => {
  const city = useSelector(({ city }) => city);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (city?.findingCityName === value) return;
    dispatch(beforeSubmitActionCreate(value));
    dispatch(getCityThunkCreator(value));
  };

  return (
    <div className={Css.searchBarWrap}>
      <h1 className={Css.searchBarTitle}>Weather of your city</h1>
      <form className={Css.searchBarForm} onSubmit={submitHandler}>
        <button className={Css.searchBarSubmit} disabled={!value}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#657789"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <div className={Css.searchBarInputWrap}>
          <input
            className={Css.searchBarInput}
            type="text"
            placeholder="enter city"
            value={value}
            onChange={handleChangeValue}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
