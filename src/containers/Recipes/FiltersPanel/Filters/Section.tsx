import { useTranslation } from 'react-i18next';
import { CheckboxFilters, FiltersENUM } from 'store/recipes/models/common';
import FilterCheckbox from './FilterCheckbox';
import { memo } from 'react';

type SectionProps = {
  filters: CheckboxFilters;
  section: FiltersENUM;
};

const Section: React.FC<SectionProps> = memo(function Section({ filters, section }) {
  const { t } = useTranslation();

  return (
    <fieldset>
      <legend className='h4'>{t(`recipes.filters.${section}`)}</legend>
      <div className='flex flex-col gap-2 md:gap-1'>
        {Object.entries(filters).map(([key, isChecked]) => {
          return <FilterCheckbox key={key} label={key} isChecked={isChecked} section={section} />;
        })}
      </div>
    </fieldset>
  );
});

export default Section;
