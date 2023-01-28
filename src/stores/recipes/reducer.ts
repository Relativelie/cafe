export const a = 6;
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getRecipes } from "services/recipes";
// import {
//   CuisineEnum,
//   DietEnum,
//   Filter,
//   Recipe,
//   Reducers,
//   State,
// } from "./models";

// const parseFilters = (enumVal: { [key: string]: any }) => {
//   let dict: any = {};
//   Object.keys(enumVal).map((key) => (dict[enumVal[key]] = false));
//   return dict;
// };

// enum CheckboxFiltersENUM {
//   Diet = "diet",
//   CuisineType = "cuisineType",
// }

// const checkboxFiltersValues = {
//   [CheckboxFiltersENUM.CuisineType]: CuisineEnum,
//   [CheckboxFiltersENUM.Diet]: DietEnum,
// };

// export const loadRecipes = createAsyncThunk(
//   "recipes",
//   async (filter: Filter) => {
//     const res = await getRecipes(filter);
//     return {
//       recipes: res.hits,
//       next: res["_links"].next?.href,
//     };
//   }
// );

// const recipesSlice = createSlice<State, Reducers<any>>({
//   name: "recipes/",
//   initialState: {
//     recipesData: null,
//     filters: {
//       q: "",
//       diet: {},
//       cuisineType: {},
//     },
//     selectedRecipe: null,
//     isLoading: false,
//   } as State,
//   reducers: {

//   extraReducers: (builder) => {
//     builder.addCase(
//       loadRecipes.fulfilled, (state, action) => {
//       state.recipesData = action.payload;
//     });
//     builder.addCase(
//       "loadRecipes", (state) => {
//         loadRecipes(state.filters).then(())
//     });
//     builder.addCase(
//       loadRecipes., (state) => {state.isLoading = true
//     });
//   },
// });

// const languageReducer = recipesSlice.reducer;
// export const { onChangeFilter, onChangeSelectedVal, setFilter } =
//   recipesSlice.actions;
// export default languageReducer;
