import RecipeEntity from './RecipeEntity';

export enum DietEnum {
  Balanced = 'balanced',
  HighFiber = 'high-fiber',
  HighProtein = 'high-protein',
  LowCarb = 'low-carb',
  LowFat = 'low-fat',
  LowSodium = 'low-sodium',
}

export enum CuisineEnum {
  American = 'american',
  Asian = 'asian',
  British = 'british',
  Caribbean = 'caribbean',
  CentralEurope = 'central europe',
  Chinese = 'chinese',
  EasternEurope = 'eastern europe',
  French = 'french',
  Greek = 'greek',
  Indian = 'indian',
  Italian = 'italian',
  Japanese = 'japanese',
  Korean = 'korean',
  Kosher = 'kosher',
  Mediterranean = 'mediterranean',
  Mexican = 'mexican',
  MiddleEastern = 'middle eastern',
  Nordic = 'nordic',
  SouthAmerican = 'south american',
  SouthEastAsian = 'south east asian',
  World = 'world',
}

export enum FiltersENUM {
  Search = 'q',
  Diet = 'diet',
  CuisineType = 'cuisineType',
}

export interface Filter {
  [FiltersENUM.Search]: string;
  [FiltersENUM.Diet]: CheckboxFilters;
  [FiltersENUM.CuisineType]: CheckboxFilters;
}

export type CheckboxFilters = { [key: string]: boolean };

export type RecipeState = {
  recipes: RecipeEntity[];
  filters: Filter;
  nextPage: string | null;
  selectedRecipe: RecipeEntity | null;
};

export type RecipeResponse = {
  recipes: RecipeEntity[] | null;
  nextPage: string | null;
};
