import {
  CuisineEnum,
  DietEnum,
  FilterType,
} from "stores/recipes/models";
import { getRequest } from "./methods";

const getRecipes =
  async (
    filters: FilterType,
  ) => {
    const parsedFilters: {
      diet: (
        | string
        | false
      )[];
      cuisineType: (
        | string
        | false
      )[];
      q?: string;
    } = {
      ...filters,
      diet: Object.keys(
        filters.diet,
      )
        .map(
          (item) =>
            filters
              .diet[
              item as DietEnum
            ] &&
            item,
        )
        .filter(
          Boolean,
        ),
      cuisineType:
        Object.keys(
          filters.cuisineType,
        )
          .map(
            (
              item,
            ) =>
              filters
                .cuisineType[
                item as CuisineEnum
              ] &&
              item,
          )
          .filter(
            Boolean,
          ),
    };

    if (
      !parsedFilters.q
    ) {
      delete parsedFilters.q;
    }

    const res =
      await getRequest(
        parsedFilters,
      );

    return res.data;
    // return Promise.resolve({hits: [], "_links": {}})
    // return {
    //   recipes: [...res.data.hits].length ? [...res.data.hits] : null,
    //   next: res.data["_links"].next?.href,
    // };
  };

const loadNextRecipes =
  async (
    url: string,
  ) => {
    const res =
      await getRequest(
        undefined,
        url,
      );
    return res.data;
  };

export {
  getRecipes,
  loadNextRecipes,
};
