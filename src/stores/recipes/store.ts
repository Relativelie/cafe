import { clone, flow, SnapshotIn, types } from "mobx-state-tree";
import { getRecipes } from "services/recipes";
import {
  Filter,
  Recipe,
  checkboxFiltersValues,
  RecipeType,
  AllFiltersENUM,
} from "./models";

const parseFilters = (enumVal: { [key: string]: any }) => {
  let dict: any = {};
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
      newFilters[val] = "";
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
    function onChangeFilter<T>(
      block: AllFiltersENUM,
      value: T,
      blockItemKey?: string,
    ) {
      console.log(block, value, blockItemKey);
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
          ? res.hits.map((item: any) => ({
              label: item.recipe.label,
              image: item.recipe.image,
              dietLabels: item.recipe.dietLabels,
              healthLabels: item.recipe.healthLabels,
              ingredientLines: item.recipe.ingredientLines,
              calories: item.recipe.calories,
              totalWeight: item.recipe.totalWeight,
              totalTime: item.recipe.totalTime,
              cuisineType: item.recipe.cuisineType,
              mealType: item.recipe.mealType,
              dishType: item.recipe.dishType,
            }))
          : null;
        self.nextPage = res["_links"].next?.href ?? null;
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
    };
  });

export interface IRecipeStore extends SnapshotIn<typeof RecipeStore> {}
