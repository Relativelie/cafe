import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import SearchIcon from 'assets/icons/SearchIcon';
import { AppButton, AppInput, ButtonSizeENUM } from 'components';
import { useTheme } from 'theme/themeProvider';
import { FiltersSection } from './FiltersSection';
import { filterBlocks } from './data';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { onChangeCheckboxFilter, onChangeSearchFilter } from 'store/recipes/recipesSlice';
import { FiltersENUM } from 'store/recipes/models/common';

type SearchingPanelProps = {
  isMobileView?: boolean;
  closeModal?: () => void;
};

const SearchingPanel: React.FC<SearchingPanelProps> = ({ isMobileView = false, closeModal }) => {
  // const { recipeStore } = useStore();
  // const { filters } = toJS(recipeStore);
  // const { onChangeFilter } = recipeStore;
  const filters = useAppSelector((state) => state.recipes.filters);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const blockStyles = {
    borderColor: theme.colors.opacityDefaultInverse,
  };

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={clsx(!isMobileView && 'relative')}>
      <div
        style={blockStyles}
        className={clsx(
          !isMobileView && 'fixed w-[25em] px-2 overflow-y-auto pt-2 h-[80%] border-r-[0.5px]',
          'flex flex-col gap-6 ',
        )}
      >
        <AppInput
          curVal={filters.q}
          handleInputChange={(value) => {
            onScrollToTop();
            dispatch(onChangeSearchFilter(value));
          }}
          leftIcon={<SearchIcon fill={theme.colors.defaultInverse} />}
          className={clsx(!isMobileView && 'mt-4 mr-4')}
        />

        <div className='flex flex-col gap-4'>
          {filterBlocks.map((filter) => {
            return (
              <FiltersSection
                key={filter.block}
                filterBlock={filter}
                filters={filters}
                onChange={(block: FiltersENUM, key: string) => {
                  onScrollToTop();
                  dispatch(onChangeCheckboxFilter({ block, key }));
                }}
              />
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
};
export default SearchingPanel;
