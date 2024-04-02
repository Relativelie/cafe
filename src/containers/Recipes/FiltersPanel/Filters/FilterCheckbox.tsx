import { Checkbox } from 'components';
import { memo } from 'react';
import { FiltersENUM } from 'store/recipes/models/common';
import { toggleFilter } from 'store/recipes/recipesSlice';
import { useAppDispatch } from 'utils/storeHooks';

type FilterCheckboxProps = {
  label: string;
  isChecked: boolean;
  section: FiltersENUM;
};

const FilterCheckbox: React.FC<FilterCheckboxProps> = memo(function FilterCheckbox({
  label,
  isChecked,
  section,
}) {
  const dispatch = useAppDispatch();

  const handleChange = (section: FiltersENUM, key: string) => {
    dispatch(toggleFilter({ section, key }));
  };

  return (
    <div className='ml-2'>
      <Checkbox label={label} checked={isChecked} onChange={() => handleChange(section, label)} />
    </div>
  );
});

export default FilterCheckbox;
