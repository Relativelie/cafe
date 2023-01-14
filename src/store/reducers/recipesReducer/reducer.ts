import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRecipes } from "services/recipes";
import { DietEnum, Filter, Reducers, State } from "./models";

export const loadRecipes = createAsyncThunk(
  "recipes",
  async (filter: Filter) => {
    const res = await getRecipes(filter);
    return {
      recipes: res.hits,
      next: res["_links"].next?.href
    };;
  }
);

const recipesSlice = createSlice<State, Reducers<any>>({
  name: "recipes/",
  initialState: {
    recipesData: null,
    filter: {
      q: "",
      diet: {
        [DietEnum.balanced]: false,
        [DietEnum.highFiber]: false,
        [DietEnum.highProtein]: false,
        [DietEnum.lowCarb]: false,
        [DietEnum.lowFat]: false,
        [DietEnum.lowSodium]: false,
      },
    },
  } as State,
  reducers: {
    onChangeFilter<T>(
      state: State,
      action: PayloadAction<{
        block: keyof Filter;
        value: T;
        blockItemKey?: string;
      }>
    ) {
      if (!action.payload.blockItemKey) {
        state.filter = {
          ...state.filter,
          [action.payload.block]: action.payload.value,
        };
      } else {
        const blockFilters = state.filter[action.payload.block] as object;
        state.filter = {
          ...state.filter,
          [action.payload.block]: {
            ...blockFilters,
            [action.payload.blockItemKey]: action.payload.value,
          },
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRecipes.fulfilled, (state, action) => {
      state.recipesData = action.payload;
    });
  },
});

const languageReducer = recipesSlice.reducer;
export const { onChangeFilter } = recipesSlice.actions;
export default languageReducer;
