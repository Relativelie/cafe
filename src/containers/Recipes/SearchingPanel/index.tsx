import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import SearchIcon from 'assets/icons/SearchIcon';
import { AppButton, AppInput, ButtonSizeENUM } from 'components';
import { useTheme } from 'theme/themeProvider';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { onChangeCheckboxFilter, onChangeSearchFilter } from 'store/recipes/recipesSlice';
import { CheckboxFilter, FiltersENUM } from 'store/recipes/models/common';
import { FiltersSection } from './FiltersSection';

type SearchingPanelProps = {
  isMobileView?: boolean;
  closeModal?: () => void;
};

const SearchingPanel: React.FC<SearchingPanelProps> = ({ isMobileView = false, closeModal }) => {
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

  const checkboxFilters = [FiltersENUM.Diet, FiltersENUM.CuisineType];

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
          {checkboxFilters.map((section, index) => {
            return (
              <FiltersSection
                key={index}
                section={section}
                filterSection={filters[section] as CheckboxFilter}
                onChange={(key: string) => {
                  onScrollToTop();
                  dispatch(onChangeCheckboxFilter({ section, key }));
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
