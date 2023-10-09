import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'store';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import SearchIcon from 'assets/icons/SearchIcon';
import { FiltersENUM } from 'stores/recipes';
import { AppButton, AppInput, ButtonSizeENUM } from 'components';
import { useTheme } from 'theme/themeProvider';
import { FiltersSection } from './FiltersSection';
import { filterBlocks } from './data';

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
            leftIcon={<SearchIcon fill={theme.colors.defaultInverse} />}
            className={clsx(!isMobileView && 'mt-4')}
          />

          <div className="flex flex-col gap-4">
            {filterBlocks.map((filter) => {
              return (
                <FiltersSection
                  key={`${filter.block}-${t(
                    `recipes.filters.${filter.block}`,
                  )}`}
                  filterBlock={filter}
                  filters={filters}
                  onChange={onChangeFilter}
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
  },
);

export default SearchingPanel;
