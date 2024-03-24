import { CheckboxFilter, FiltersENUM } from 'store/recipes/models/common';
import Section from './Section';
import { useAppDispatch, useAppSelector } from 'utils/storeHooks';
import { onFilterChange } from 'store/recipes/recipesSlice';
import { memo } from 'react';

const checkboxFilters = [FiltersENUM.Diet, FiltersENUM.CuisineType];

const Filters = memo(function Filters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.recipes.filters);

  const handleChange = (section: FiltersENUM, key: string) => {
    dispatch(onFilterChange({ section, key }));
  };

  return (
    <div className='flex flex-col gap-4'>
      {checkboxFilters.map((section, index) => {
        const filterSection = filters[section] as CheckboxFilter;

        return (
          <Section
            key={index}
            section={section}
            filterSection={filterSection}
            onChange={(key: string) => handleChange(section, key)}
          />
        );
      })}
    </div>
  );
});

export default Filters;
