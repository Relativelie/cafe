import { AppCheckbox } from 'components';
import React from 'react';
import { FilterBlock } from './models';
import { FilterType, FiltersENUM } from 'stores/recipes';

type SectionProps = {
  filterBlock: FilterBlock;
  filters: FilterType;
  onChange: (block: FiltersENUM, value: boolean, blockItemKey: string) => void;
};

export const Section: React.FC<SectionProps> = ({
  filterBlock,
  filters,
  onChange,
}) => {
  const { block, label, availableValues } = filterBlock;
  return (
    <React.Fragment key={`${block}`}>
      <h4>{label}</h4>
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
