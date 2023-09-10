import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'store';

import { Checkbox, Input } from 'components';
import SearchIcon from 'assets/svg/search';
import { FiltersENUM, CuisineEnum, DietEnum } from 'stores/recipes';
import { FilterBlock } from './models';
import { useTranslation } from 'react-i18next';

const toArrayFilters = (enumVal: typeof DietEnum | typeof CuisineEnum): Array<string> => {
  return Object.values(enumVal).map((val) => val);
};

const SearchingPanel = observer(() => {
  const { recipeStore } = useStore();
  const { filters } = toJS(recipeStore);
  const { onChangeFilter } = recipeStore;
  const { t } = useTranslation();

  const filterBlocks = [
    new FilterBlock(
      t('recipes.filters.diet'),
      FiltersENUM.Diet,
      toArrayFilters(DietEnum),
    ),
    new FilterBlock(
      t('recipes.filters.cuisine'),
      FiltersENUM.CuisineType,
      toArrayFilters(CuisineEnum),
    ),
  ];
  return (
    <div className="relative">
      <div className="fixed w-[400px] h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
        <Input
          curVal={filters.q}
          handleInputChange={(value) => onChangeFilter(FiltersENUM.Search, value)}
          leftIcon={<SearchIcon />}
          className="mt-4"
        />
        <div>
          {filterBlocks.map((filter) => {
            return (
              <React.Fragment key={`${filter.block}`}>
                <h4>{filter.label}</h4>
                <div className="flex flex-col gap-1">
                  {filter.availableValues.map((item) => {
                    return (
                      <div key={`${item}-checkbox`} className="ml-2">
                        <Checkbox
                          label={item}
                          checked={(filters[filter.block] as any)[item]}
                          onChange={(value) => onChangeFilter(filter.block, value, item)}
                        />
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default SearchingPanel;
