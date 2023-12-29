import { CuisineEnum, DietEnum, FiltersENUM } from 'store/recipes/models/common';
import { FilterBlock } from './models';

const toArrayFilters = (enumVal: typeof DietEnum | typeof CuisineEnum): Array<string> => {
  return Object.values(enumVal).map((val) => val);
};

export const filterBlocks = [
  new FilterBlock(FiltersENUM.Diet, toArrayFilters(DietEnum)),
  new FilterBlock(FiltersENUM.CuisineType, toArrayFilters(CuisineEnum)),
];
