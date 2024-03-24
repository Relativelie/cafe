import { useEffect, useRef, useState } from 'react';
import isEqual from 'lodash.isequal';
import { Outlet, useNavigate } from 'react-router-dom';

import { FullScreenLoader } from 'components';
import useDebounce from 'utils/useDebounce';
import { useAppSelector } from 'utils/storeHooks';
import { getRecipes } from 'services/recipes';
import URLS from 'constants/urls';
import MobileSearchingPanel from './MobileSearchingPanel';
import SearchingPanel from './FiltersPanel';

const Recipes = () => {
  const navigate = useNavigate();

  const { filters } = useAppSelector((state) => state.recipes);
  const [trigger] = getRecipes.useLazyQuery();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchText = useDebounce<string>(filters.q, 1000);
  const checkboxFiltersRef = useRef({
    ...filters.diet,
    ...filters.cuisineType,
  });

  const checkboxFilters = {
    ...filters.diet,
    ...filters.cuisineType,
  };

  if (!isEqual(checkboxFiltersRef.current, checkboxFilters)) {
    checkboxFiltersRef.current = checkboxFilters;
  }

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      await trigger(filters);
      setIsLoading(false);
      navigate(URLS.RECIPES.SEARCH);
    };

    fetchRecipes();
  }, [debouncedSearchText, checkboxFiltersRef.current]);

  return (
    <>
      {isLoading && <FullScreenLoader />}

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
