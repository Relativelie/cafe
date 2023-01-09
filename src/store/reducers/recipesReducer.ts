import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipesRes } from "services/recipes/models";
import { getRecipes } from "services/recipes/recipes";

export const loadRecipes = createAsyncThunk(
    'recipes',
    async (filter: object) => {
      const response = await getRecipes(filter)
      return response
    }
  )

export type State = {
  recipesData: RecipesRes | null;
  filter: {
    q: string;
  };
};

type Reducers<T> = {
  onChangeFilter: (
    state: State,
    action: PayloadAction<{
      key: string;
      value: T;
    }>
  ) => void;
};

const recipesSlice = createSlice<State, Reducers<any>>({
  name: "recipes/",
  initialState: {
    recipesData: null,
    filter: {
      q: "lala",
    },
  } as State,
  reducers: {

    onChangeFilter<T>(
      state: State,
      action: PayloadAction<{
        key: string;
        value: T;
      }>
    ) {
      state.filter = {
        ...state.filter,
        [action.payload.key]: action.payload.value,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRecipes.fulfilled, (state, action) => {
        state.recipesData = action.payload
    })
  }
});

const languageReducer = recipesSlice.reducer;
export const { onChangeFilter } = recipesSlice.actions;
export default languageReducer;
