import { useEffect, useRef, useState } from 'react';
import isEqual from 'lodash.isequal';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppSpinnerContainer } from 'components';
import useDebounce from 'utils/useDebounce';
import { useAppSelector } from 'utils/hooks';
import { getRecipes } from 'services/recipes';
import URLS from 'constants/urls';
import MobileSearchingPanel from './MobileSearchingPanel';
import SearchingPanel from './SearchingPanel';

const Recipes = () => {
  const navigate = useNavigate();

  const { filters } = useAppSelector((state) => state.recipes);
  const [trigger] = getRecipes.useLazyQuery();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    trigger(filters).then(() => {
      navigate(URLS.RECIPES.SEARCH);
      setIsLoading(false);
    });
  }, [debouncedVal, checkboxFiltersRef.current]);

  return (
    <>
      {isLoading && <AppSpinnerContainer />}

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
