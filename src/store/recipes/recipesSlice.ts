import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CheckboxFilter, CuisineEnum, DietEnum, FiltersENUM, RecipeState } from './models/common';
import { getFilterModel } from './helpers';
import { recipesApi } from 'services/recipes';

const initialState: RecipeState = {
  filters: {
    [FiltersENUM.Search]: 'cherry',
    [FiltersENUM.Diet]: getFilterModel(DietEnum),
    [FiltersENUM.CuisineType]: getFilterModel(CuisineEnum),
  },
  recipes: null,
  nextPage: null,
  selectedRecipe: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    onChangeSearchFilter(state, { payload }: PayloadAction<string>) {
      state.filters[FiltersENUM.Search] = payload;
    },
    onChangeCheckboxFilter(
      state,
      { payload }: PayloadAction<{ section: FiltersENUM; key: string }>,
    ) {
      const { section: block, key } = payload;
      const blockValue = state.filters[block] as CheckboxFilter;
      blockValue[key] = !blockValue[key];
    },
    selectRecipe(state, action: PayloadAction<string>) {
      if (!state.recipes) return;

      state.selectedRecipe = state.recipes.find((recipe) => recipe.uri === action.payload) ?? null;
    },
    unselectRecipe(state) {
      state.selectedRecipe = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(recipesApi.endpoints.getRecipes.matchFulfilled, (state, { payload }) => {
      const { recipes, nextPage } = payload;
      state.recipes = recipes;
      state.nextPage = nextPage;
    });
    builder.addMatcher(recipesApi.endpoints.getNextRecipes.matchFulfilled, (state, { payload }) => {
      const { recipes, nextPage } = payload;
      const stateRecipes = state.recipes ?? [];
      const newRecipes = recipes ?? [];
      state.recipes = [...stateRecipes, ...newRecipes];
      state.nextPage = nextPage;
    });
  },
});

export const { onChangeSearchFilter, onChangeCheckboxFilter, selectRecipe, unselectRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
