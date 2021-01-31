import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./components/searchBar/SearchBar";
import TempChart from "./components/tempChart/TempChart";

const CityPage = (props) => {
  const [value, setValue] = useState("");
  const handleChangeValue = ({ target: { value } }) => setValue(value);
  const { city } = useSelector(({ city }) => city);

  return (
    <>
      <SearchBar value={value} handleChangeValue={handleChangeValue} />
      {city && <TempChart />}
    </>
  );
};

export default CityPage;
