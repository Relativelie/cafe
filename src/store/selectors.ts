import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const recipesStateSelector = (state: RootState) => state.recipesReducer;

// export const languageSelector = createSelector(
//   languageStateSelector,
//   (state) => state.test
// );


export const recipesData = createSelector(
  recipesStateSelector,
  (state) => state.recipesData
);

export const recipesFilters = createSelector(
  recipesStateSelector,
  (state) => state.filter
);