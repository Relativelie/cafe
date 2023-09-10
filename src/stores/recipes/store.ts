import { clone, flow, SnapshotIn, types } from 'mobx-state-tree';
import { getRecipes, getNextRecipes } from 'services/recipes';
import {
  FiltersENUM,
  checkboxFilters,
  Filter,
  FilterType,
  Recipe,
  RecipeType,
} from './models';

const initialSearchValue = 'cherry';
const initializeFilters = (): FilterType => {
  const newFilters: FilterType = {
    q: initialSearchValue,
    diet: {},
    cuisineType: {},
  };

  Object.values(FiltersENUM).forEach((val) => {
    if (val !== FiltersENUM.Search) {
      newFilters[val] = { ...generateDefaultValue(checkboxFilters[val]) };
    }
  });
  return newFilters;
};

const generateDefaultValue = (enumVal: { [key: string]: string }) => {
  let dict: { [key: string]: boolean } = {};
  Object.keys(enumVal).map((key) => (dict[enumVal[key]] = false));
  return dict;
};

export const RecipeStore = types
  .model('RecipeStore', {
    recipesData: types.maybeNull(types.array(Recipe)),
    filters: types.optional(Filter, initializeFilters()),
    selectedRecipe: types.maybeNull(Recipe),
    isLoading: types.optional(types.boolean, false),
    nextPage: types.maybeNull(types.string),
    likedRecipes: types.optional(types.array(types.string), []),
  })
  .actions((self) => {
    function onChangeFilter<T>(block: FiltersENUM, value: T, blockItemKey?: string) {
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
          ? res.hits.map(({ recipe }: any) => convertToRecipe(recipe))
          : null;
        self.nextPage = res['_links'].next?.href ?? null;
      } finally {
        self.isLoading = false;
      }
    });

    const loadNextRecipesList = flow(function* () {
      try {
        self.isLoading = true;
        if (self.nextPage) {
          const res = yield getNextRecipes(self.nextPage);
          if (res.hits.length) {
            self.recipesData?.push(
              ...res.hits.map(({ recipe }: any) => convertToRecipe(recipe)),
            );
          }
          self.nextPage = res['_links'].next?.href ?? null;
        }
      } finally {
        self.isLoading = false;
      }
    });

    const convertToRecipe = (data: any) => {
      return Recipe.create({
        url: data.url,
        totalDaily: `${Math.round(data.totalDaily.ENERC_KCAL.quantity)}%`,
        label: data.label,
        image: data.image,
        dietLabels: data.dietLabels,
        healthLabels: data.healthLabels,
        ingredientLines: data.ingredientLines,
        calories: data.calories,
        totalWeight: data.totalWeight,
        totalTime: data.totalTime,
        cuisineType: data.cuisineType,
        mealType: data.mealType,
        dishType: data.dishType,
      });
    };

    return {
      onChangeFilter,
      onClickRecipe,
      loadRecipes,
      loadNextRecipesList,
    };
  });

export interface IRecipeStore extends SnapshotIn<typeof RecipeStore> {}
