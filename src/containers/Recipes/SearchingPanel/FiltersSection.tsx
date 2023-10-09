import { AppCheckbox } from 'components';
import React from 'react';
import { FilterBlock } from './data/models';
import { FilterType, FiltersENUM } from 'stores/recipes';
import { useTranslation } from 'react-i18next';

type FiltersSectionProps = {
  filterBlock: FilterBlock;
  filters: FilterType;
  onChange: (block: FiltersENUM, value: boolean, blockItemKey: string) => void;
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
      <div className="flex flex-col gap-2 md:gap-1">
        {availableValues.map((item) => {
          return (
            <div key={`${item}-checkbox`} className="ml-2">
              <AppCheckbox
                label={item}
                checked={(filters[block] as any)[item]}
                onChange={(value) => onChange(block, value, item)}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
