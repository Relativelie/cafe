import { CuisineEnum, DietEnum } from './models/common';

type FilterENUM = typeof DietEnum | typeof CuisineEnum;

/**
 * Generates a filter model object from a given enumeration.
 * Each enum key is mapped to `false` initially.
 *
 * @param enumType - The enumeration to transform into a filter model.
 * @returns An object where each key from the enum maps to `false`.
 */

export function getFilterModel(enumType: FilterENUM) {
  return Object.values(enumType).reduce((acc: Record<string, boolean>, value: string) => {
    acc[value] = false;
    return acc;
  }, {});
}
