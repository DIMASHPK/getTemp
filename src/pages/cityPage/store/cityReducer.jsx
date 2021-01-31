import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: null,
  error: null,
  isFetching: false,
  findingCityName: null,
};

const citySlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    cityActionCreator: (state, { payload }) => {
      state.city = payload;
    },
    cityErrorActionCreator: (state, { payload }) => {
      state.error = payload;
    },
    isCityFetching: (state, { payload }) => {
      state.isFetching = payload;
    },
    beforeSubmitActionCreate: (state, { payload }) => {
      state.isFetching = true;
      state.error = null;
      state.city = null;
      state.findingCityName = payload;
    },
  },
});

export const {
  cityActionCreator,
  cityErrorActionCreator,
  isCityFetching,
  beforeSubmitActionCreate,
} = citySlice.actions;

export const cityReducer = citySlice.reducer;
