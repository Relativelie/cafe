import { clone, flow, SnapshotIn, types } from "mobx-state-tree";
import { getRecipes, loadNextRecipes } from "services/recipes";
import {
  Filter,
  Recipe,
  checkboxFiltersValues,
  RecipeType,
  AllFiltersENUM,
} from "./models";

const parseFilters = (enumVal: { [key: string]: string }) => {
  let dict: { [key: string]: boolean } = {};
  Object.keys(enumVal).map((key) => (dict[enumVal[key]] = false));
  return dict;
};

const setFilters = () => {
  const newFilters: any = {};
  Object.values(AllFiltersENUM).forEach((val) => {
    if (val !== AllFiltersENUM.Search) {
      newFilters[val] = {
        ...parseFilters(checkboxFiltersValues[val]),
      };
    } else {
      newFilters[val] = "cherry";
    }
  });
  return newFilters;
};

export const RecipeStore = types
  .model("RecipeStore", {
    recipesData: types.maybeNull(types.array(Recipe)),
    filters: types.optional(Filter, setFilters()),
    selectedRecipe: types.maybeNull(Recipe),
    isLoading: types.optional(types.boolean, false),
    nextPage: types.maybeNull(types.string),
  })
  .actions((self) => {
    function onChangeFilter<T>(block: AllFiltersENUM, value: T, blockItemKey?: string) {
      if (!blockItemKey) {
        self.filters = {
          ...self.filters,
          [block]: value,
        };
      } else {
        const blockFilters = clone(self.filters[block]) as object;
        self.filters = {
          ...self.filters,
          [block]: {
            ...blockFilters,
            [blockItemKey]: value,
          },
        };
      }
    }
    const onClickRecipe = (recipe: RecipeType | null) => {
      self.selectedRecipe = recipe;
    };

    const loadRecipes = flow(function* () {
      try {
        self.isLoading = true;
        const res = yield getRecipes(self.filters);
        self.recipesData = res.hits.length
          ? res.hits.map(({ recipe }: any) => ({
              url: recipe.url,
              totalDaily: `${Math.round(recipe.totalDaily.ENERC_KCAL.quantity)}%`,
              label: recipe.label,
              image: recipe.image,
              dietLabels: recipe.dietLabels,
              healthLabels: recipe.healthLabels,
              ingredientLines: recipe.ingredientLines,
              calories: recipe.calories,
              totalWeight: recipe.totalWeight,
              totalTime: recipe.totalTime,
              cuisineType: recipe.cuisineType,
              mealType: recipe.mealType,
              dishType: recipe.dishType,
            }))
          : null;
        self.nextPage = res["_links"].next?.href ?? null;
      } catch (e) {
        console.log(e);
      } finally {
        self.isLoading = false;
      }
    });

    const loadNextRecipesList = flow(function* () {
      try {
        self.isLoading = true;
        if (self.nextPage) {
          const res = yield loadNextRecipes(self.nextPage);
          if (res.hits.length) {
            self.recipesData?.push(
              ...res.hits.map(({ recipe }: any) => ({
                url: recipe.url,
                totalDaily: `${Math.round(recipe.totalDaily.ENERC_KCAL.quantity)}%`,
                label: recipe.label,
                image: recipe.image,
                dietLabels: recipe.dietLabels,
                healthLabels: recipe.healthLabels,
                ingredientLines: recipe.ingredientLines,
                calories: recipe.calories,
                totalWeight: recipe.totalWeight,
                totalTime: recipe.totalTime,
                cuisineType: recipe.cuisineType,
                mealType: recipe.mealType,
                dishType: recipe.dishType,
              })),
            );
          }

          self.nextPage = res["_links"].next?.href ?? null;
        }
      } catch (e) {
        console.log(e);
      } finally {
        self.isLoading = false;
      }
    });

    return {
      onChangeFilter,
      onClickRecipe,
      loadRecipes,
      loadNextRecipesList,
    };
  });

export interface IRecipeStore extends SnapshotIn<typeof RecipeStore> {}
