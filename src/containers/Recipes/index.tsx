import { useEffect, useRef } from "react";
import useDebounce from "utils/useDebounce";
import { observer } from "mobx-react-lite";
import { useStore } from "store";
import { toJS } from "mobx";
import isEqual from "lodash.isequal";
import SearchingPanel from "./SearchingPanel";
import { Outlet, useNavigate } from "react-router-dom";
import URLS from "constants/urls";
import { Spinner } from "components";

const Recipes = observer(() => {
  const navigate = useNavigate();
  const { recipeStore } = useStore();
  const { filters, isLoading } = toJS(recipeStore);
  const { loadRecipes } = recipeStore;

  const debouncedVal = useDebounce<string>(filters.q, 1000);
  const checkboxFiltersRef = useRef({ ...filters.diet, ...filters.cuisineType });

  if (!isEqual(checkboxFiltersRef.current, { ...filters.diet, ...filters.cuisineType })) {
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
        <div className="fixed h-full w-full z-10 bg-slate-500/50">
          <Spinner />
        </div>
      )}

      <div className="grid grid-cols-[minmax(200px,400px),_1fr]">
        <SearchingPanel />
        <Outlet />
      </div>
    </>
  );
});

export default Recipes;
