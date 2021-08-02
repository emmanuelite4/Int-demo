import { createSlice } from "@reduxjs/toolkit";
import brands from "../../infastructure/brand";

const initialState = {
  currentBrand: {},
  brands: brands,
  brandError: "",
};

const brand = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrandStart(state, action) {
      console.log(action);
    },
    addBrandSuccess(state, action) {
      state.brands.push(action.payload);
      state.currentBrand = action.payload;
      state.brandError = "";
    },
    addBrandFailed(state, action) {
      state.brandError = action.payload;
    },
  },
});

export const { addBrandStart, addBrandSuccess, addBrandFailed } = brand.actions;

export default brand.reducer;
