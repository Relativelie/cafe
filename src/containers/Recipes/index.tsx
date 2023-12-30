import { useEffect, useRef } from 'react';
import isEqual from 'lodash.isequal';
import { Outlet, useNavigate } from 'react-router-dom';

import SearchingPanel from './SearchingPanel';
import { AppSpinner } from 'components';
import useDebounce from 'utils/useDebounce';
import MobileSearchingPanel from './MobileSearchingPanel';
import { useTheme } from 'theme/themeProvider';
import { useAppSelector } from 'utils/hooks';
import { getRecipes } from 'services/recipes';
import URLS from 'constants/urls';

const Recipes = () => {
  const navigate = useNavigate();

  const { filters } = useAppSelector((state) => state.recipes);
  const [trigger, { isLoading }] = getRecipes.useLazyQuery();

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
    trigger(filters).then(() => {
      navigate(URLS.RECIPES.SEARCH);
    });
  }, [debouncedVal, checkboxFiltersRef.current]);

  return (
    <>
      {isLoading && (
        <div
          style={{ backgroundColor: theme.colors.opacityDefault }}
          className='fixed h-full w-full z-10'
        >
          <AppSpinner />
        </div>
      )}

      <div className='grid lg:grid-cols-[minmax(200px,400px),_1fr]'>
        <div className='hidden lg:block'>
          <SearchingPanel />
        </div>
        <MobileSearchingPanel />
        <Outlet />
      </div>
    </>
  );
};

export default Recipes;
