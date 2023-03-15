import { Instance, ISimpleType, types } from "mobx-state-tree";

export enum DietEnum {
  Balanced = "balanced",
  HighFiber = "high-fiber",
  HighProtein = "high-protein",
  lowCarb = "low-carb",
  LowFat = "low-fat",
  LowSodium = "low-sodium",
}

export enum CuisineEnum {
  American = "american",
  Asian = "asian",
  British = "british",
  Caribbean = "caribbean",
  CentralEurope = "central europe",
  Chinese = "chinese",
  EasternEurope = "eastern europe",
  French = "french",
  Greek = "greek",
  Indian = "indian",
  Italian = "italian",
  Japanese = "japanese",
  Korean = "korean",
  Kosher = "kosher",
  Mediterranean = "mediterranean",
  Mexican = "mexican",
  MiddleEastern = "middle eastern",
  Nordic = "nordic",
  SouthAmerican = "south american",
  SouthEastAsian = "south east asian",
  World = "world",
}

const parseFiltersType = (enumVal: typeof DietEnum | typeof CuisineEnum) => {
  let dict: any = {};
  Object.keys(enumVal).map(
    (key) => (dict[enumVal[key as keyof typeof enumVal]] = types.boolean),
  );
  return types.model({ ...dict });
};

export const Filter = types.model({
  q: types.string,
  diet: parseFiltersType(DietEnum),
  cuisineType: parseFiltersType(CuisineEnum),
});

export type FilterType = Instance<typeof Filter>;

export enum AllFiltersENUM {
  Search = "q",
  Diet = "diet",
  CuisineType = "cuisineType",
}

export enum AllFiltersTitlesENUM {
  Diet = "Diet",
  CuisineType = "Cuisine",
}

export const checkboxFiltersValues = {
  [AllFiltersENUM.CuisineType]: CuisineEnum,
  [AllFiltersENUM.Diet]: DietEnum,
};

export const Recipe = types.model({
  label: types.string,
  image: types.string,
  url: types.string,
  dietLabels: types.array(types.string),
  healthLabels: types.array(types.string),
  ingredientLines: types.array(types.string),
  calories: types.number,
  totalWeight: types.number,
  totalTime: types.number,
  cuisineType: types.array(types.string),
  mealType: types.array(types.string),
  dishType: types.frozen(),
  totalDaily: types.string,
});

export type RecipeType = Instance<typeof Recipe>;

export type RecipeResponse = {
  from: number;
  to: number;
  count: number;
  _links: {
    self: {
      href: string;
      title: string;
    };
    next: {
      href: string;
      title: string;
    };
  };
  hits: RecipeType[];
};
