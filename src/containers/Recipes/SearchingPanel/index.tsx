import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'store';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import SearchIcon from 'assets/icons/SearchIcon';
import { FilterBlock } from './models';
import { CuisineEnum, DietEnum, FiltersENUM } from 'stores/recipes';
import { AppButton, AppCheckbox, AppInput, ButtonSizeENUM } from 'components';
import { useTheme } from 'theme/themeProvider';

const toArrayFilters = (
  enumVal: typeof DietEnum | typeof CuisineEnum,
): Array<string> => {
  return Object.values(enumVal).map((val) => val);
};

type SearchingPanelProps = {
  isMobileView?: boolean;
  closeModal?: () => void;
};

const SearchingPanel: React.FC<SearchingPanelProps> = observer(
  ({ isMobileView = false, closeModal }) => {
    const { recipeStore } = useStore();
    const { filters } = toJS(recipeStore);
    const { onChangeFilter } = recipeStore;
    const { t } = useTranslation();
    const { theme } = useTheme();

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

    const blockStyles = {
      borderColor: theme.colors.opacityDefaultInverse,
    };

    return (
      <div className={clsx(!isMobileView && 'relative')}>
        <div
          style={blockStyles}
          className={clsx(
            !isMobileView &&
              'fixed w-[25em] px-2 pt-2 h-screen border-r-[0.5px]',
            'flex flex-col gap-6 ',
          )}
        >
          <AppInput
            curVal={filters.q}
            handleInputChange={(value) =>
              onChangeFilter(FiltersENUM.Search, value)
            }
            leftIcon={<SearchIcon />}
            className={clsx(!isMobileView && 'mt-4')}
          />
          <div className="flex flex-col gap-4">
            {filterBlocks.map((filter) => {
              return (
                <React.Fragment key={`${filter.block}`}>
                  <h4>{filter.label}</h4>
                  <div className="flex flex-col gap-2 md:gap-1">
                    {filter.availableValues.map((item) => {
                      return (
                        <div key={`${item}-checkbox`} className="ml-2">
                          <AppCheckbox
                            label={item}
                            checked={(filters[filter.block] as any)[item]}
                            onChange={(value) =>
                              onChangeFilter(filter.block, value, item)
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          {isMobileView && (
            <AppButton size={ButtonSizeENUM.full} onClick={closeModal}>
              {t('common.close')}
            </AppButton>
          )}
        </div>
      </div>
    );
  },
);

export default SearchingPanel;
