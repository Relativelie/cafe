import { FilterType, FiltersENUM, checkboxFilters } from './models'

export const initialSearchValue = 'cherry'
export const initializeFilters = (): FilterType => {
  const newFilters: FilterType = {
    q: initialSearchValue,
    diet: {},
    cuisineType: {},
  }

  Object.values(FiltersENUM).forEach((val) => {
    if (val !== FiltersENUM.Search) {
      newFilters[val] = { ...generateDefaultValue(checkboxFilters[val]) }
    }
  })
  return newFilters
}

export const generateDefaultValue = (enumVal: { [key: string]: string }) => {
  const dict: { [key: string]: boolean } = {}
  Object.keys(enumVal).map((key) => (dict[enumVal[key]] = false))
  return dict
}
