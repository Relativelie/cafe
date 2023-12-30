import { AppCheckbox } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckboxFilter, FiltersENUM } from 'store/recipes/models/common';

type FiltersSectionProps = {
  filterSection: CheckboxFilter;
  onChange: (key: string) => void;
  section: FiltersENUM;
};

export const FiltersSection: React.FC<FiltersSectionProps> = ({
  filterSection,
  section,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t(`recipes.filters.${section}`)}</h4>
      <div className='flex flex-col gap-2 md:gap-1'>
        {Object.entries(filterSection).map(([key, value]) => {
          return (
            <div key={key} className='ml-2'>
              <AppCheckbox label={key} checked={value} onChange={() => onChange(key)} />
            </div>
          );
        })}
      </div>
    </>
  );
};
