import { CuisineEnum, DietEnum } from './models/common';

type FilterUnion = typeof DietEnum | typeof CuisineEnum;
export function getFilterModel(enumType: FilterUnion) {
  return Object.values(enumType).reduce((acc: { [key: string]: boolean }, key) => {
    acc[key] = false;
    return acc;
  }, {});
}
