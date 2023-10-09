import { DietEnum, CuisineEnum, FiltersENUM } from 'stores/recipes';
import { FilterBlock } from './models';

const toArrayFilters = (
  enumVal: typeof DietEnum | typeof CuisineEnum,
): Array<string> => {
  return Object.values(enumVal).map((val) => val);
};

export const filterBlocks = [
  new FilterBlock(FiltersENUM.Diet, toArrayFilters(DietEnum)),
  new FilterBlock(FiltersENUM.CuisineType, toArrayFilters(CuisineEnum)),
];
