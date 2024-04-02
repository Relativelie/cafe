import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CheckboxFilters, CuisineEnum, DietEnum, FiltersENUM, RecipeState } from './models/common';
import { getFilterModel } from './helpers';
import { recipesApi } from 'services/recipes';

const initialState: RecipeState = {
  filters: {
    [FiltersENUM.Search]: 'cherry',
    [FiltersENUM.Diet]: getFilterModel(DietEnum),
    [FiltersENUM.CuisineType]: getFilterModel(CuisineEnum),
  },
  recipes: [],
  nextPage: null,
  selectedRecipe: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setSearchFilter(state, { payload }: PayloadAction<string>) {
      state.filters[FiltersENUM.Search] = payload;
    },
    toggleFilter(state, { payload }: PayloadAction<{ section: FiltersENUM; key: string }>) {
      const { section, key } = payload;
      const filter = state.filters[section] as CheckboxFilters;
      filter[key] = !filter[key];
    },
    selectRecipe(state, action: PayloadAction<string>) {
      if (!state.recipes) return;

      state.selectedRecipe = state.recipes.find((recipe) => recipe.uri === action.payload) || null;
    },
    clearSelectedRecipe(state) {
      state.selectedRecipe = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(recipesApi.endpoints.getRecipes.matchFulfilled, (state, { payload }) => {
      const { recipes, nextPage } = payload;
      state.recipes = recipes || [];
      state.nextPage = nextPage;
    });
    builder.addMatcher(recipesApi.endpoints.getNextRecipes.matchFulfilled, (state, { payload }) => {
      state.recipes = [...state.recipes, ...(payload.recipes || [])];
      state.nextPage = payload.nextPage;
    });
  },
});

export const { setSearchFilter, toggleFilter, selectRecipe, clearSelectedRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
