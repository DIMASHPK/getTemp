import { citiesApi } from "../../../api/api";
import {
  isCityFetching,
  cityErrorActionCreator,
  cityActionCreator,
} from "./cityReducer";

export const getCityThunkCreator = (city) => async (dispatch) => {
  const findingCity = await citiesApi.getCities(city);

  dispatch(isCityFetching(false));
  if (findingCity.isError) {
    dispatch(cityErrorActionCreator(findingCity));
  } else {
    dispatch(cityActionCreator(findingCity));
  }
};
