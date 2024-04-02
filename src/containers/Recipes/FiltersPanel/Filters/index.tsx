import { CheckboxFilters, FiltersENUM } from 'store/recipes/models/common';
import Section from './Section';
import { useAppSelector } from 'utils/storeHooks';

const checkboxFilters = [FiltersENUM.Diet, FiltersENUM.CuisineType];

const Filters = () => {
  const filters = useAppSelector((state) => state.recipes.filters);

  return (
    <div className='flex flex-col gap-4'>
      {checkboxFilters.map((section, index) => {
        const filterSection = filters[section] as CheckboxFilters;

        return <Section key={index} section={section} filters={filterSection} />;
      })}
    </div>
  );
};

export default Filters;
