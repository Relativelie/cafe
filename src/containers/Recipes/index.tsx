import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';
import { toJS } from 'mobx';
import isEqual from 'lodash.isequal';
import { Outlet, useNavigate } from 'react-router-dom';

import SearchingPanel from './SearchingPanel';
import { AppSpinner } from 'components';
import useDebounce from 'utils/useDebounce';
import URLS from 'constants/urls';
import MobileSearchingPanel from './MobileSearchingPanel';
import { useTheme } from 'theme/themeProvider';

const Recipes = observer(() => {
  const navigate = useNavigate();
  const { recipeStore } = useStore();
  const { filters, isLoading } = toJS(recipeStore);
  const { loadRecipes } = recipeStore;
  const { theme } = useTheme();

  const debouncedVal = useDebounce<string>(filters.q, 1000);
  const checkboxFiltersRef = useRef({
    ...filters.diet,
    ...filters.cuisineType,
  });

  if (
    !isEqual(checkboxFiltersRef.current, {
      ...filters.diet,
      ...filters.cuisineType,
    })
  ) {
    checkboxFiltersRef.current = { ...filters.diet, ...filters.cuisineType };
  }

  useEffect(() => {
    loadRecipes().then(() => {
      navigate(URLS.RECIPES.SEARCH);
    });
  }, [debouncedVal, checkboxFiltersRef.current]);

  return (
    <>
      {isLoading && (
        <div
          style={{ backgroundColor: theme.colors.opacityDefault }}
          className="fixed h-full w-full z-10"
        >
          <AppSpinner />
        </div>
      )}

      <div className="grid lg:grid-cols-[minmax(200px,400px),_1fr]">
        <div className="hidden lg:block">
          <SearchingPanel />
        </div>
        <MobileSearchingPanel />
        <Outlet />
      </div>
    </>
  );
});

export default Recipes;
