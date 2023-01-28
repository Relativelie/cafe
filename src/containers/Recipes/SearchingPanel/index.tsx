import { Checkbox, Input } from "components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "store";
import {
  AllFiltersENUM,
  AllFiltersTitlesENUM,
  CuisineEnum,
  DietEnum,
} from "stores/recipes/models";
import SearchIcon from "../../../assets/svg/search";

const parseAvailableFilters = (enumVal: { [key: string]: any }) => {
  return Object.values(enumVal).map((val) => val);
};

const allFilters = [
  {
    label: AllFiltersTitlesENUM.Diet,
    block: AllFiltersENUM.Diet,
    availableValues: parseAvailableFilters(DietEnum),
  },
  {
    label: AllFiltersTitlesENUM.CuisineType,
    block: AllFiltersENUM.CuisineType,
    availableValues: parseAvailableFilters(CuisineEnum),
  },
];

const SearchingPanel = observer(() => {
  const { recipeStore } = useStore();
  const { filters } = toJS(recipeStore);
  const { onChangeFilter } = recipeStore;

  return (
    <div className="relative">
      <div className="fixed w-[400px] h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
        <h3 className="font-dance text-center font-medium">Made with love</h3>
        <Input
          curVal={filters.q}
          handleInputChange={(value) => onChangeFilter(AllFiltersENUM.Search, value)}
          leftIcon={<SearchIcon />}
        />
        <div>
          {allFilters.map((filter) => {
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
