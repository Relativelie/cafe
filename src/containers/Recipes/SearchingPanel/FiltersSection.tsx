import { AppCheckbox } from 'components';
import React from 'react';
import { FilterBlock } from './data/models';
import { useTranslation } from 'react-i18next';
import { Filter, FiltersENUM } from 'store/recipes/models/common';

type FiltersSectionProps = {
  filterBlock: FilterBlock;
  filters: Filter;
  onChange: (block: FiltersENUM, key: string) => void;
};

export const FiltersSection: React.FC<FiltersSectionProps> = ({
  filterBlock,
  filters,
  onChange,
}) => {
  const { block, availableValues } = filterBlock;
  const { t } = useTranslation();

  return (
    <React.Fragment key={`${block}-block`}>
      <h4>{t(`recipes.filters.${block}`)}</h4>
      <div className='flex flex-col gap-2 md:gap-1'>
        {availableValues.map((item) => {
          return (
            <div key={`${item}-checkbox`} className='ml-2'>
              <AppCheckbox
                label={item}
                checked={(filters[block] as any)[item]}
                onChange={() => onChange(block, item)}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
