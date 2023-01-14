import { DietEnum, Filter } from "store/reducers/recipesReducer/models";
import { getRequest } from "./methods";

const getRecipes = async (filters: Filter) => {
  const parsedFilters: {
    diet: (string | false)[];
    q?: string;
  } = {
    ...filters,
    diet: Object.keys(filters.diet)
      .map((item) => filters.diet[item as DietEnum] && item)
      .filter(Boolean),
  };
  console.log(!parsedFilters.q)
  if (!parsedFilters.q) {
    console.log(parsedFilters)
    delete parsedFilters.q
  };
  console.log(parsedFilters)
  const res = await getRequest(parsedFilters);
  return res.data;
};

const loadNextRecipes = async (url: string) => {
  const res = await getRequest(undefined, url);
  return res.data;
};

export { getRecipes, loadNextRecipes };
