import { DietEnum, Filter } from "store/reducers/recipesReducer/models";
import { getRequest } from "../methods";

export const getRecipes = (filters: Filter) => {
  const parsedFilters = {
    q: filters.q,
    diet: Object.keys(filters.diet)
      .map((item) => filters.diet[item as DietEnum] && item)
      .filter(Boolean),
  };

  return getRequest(parsedFilters).then((res) => {
    return res.data;
  });
};
