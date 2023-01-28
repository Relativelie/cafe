import { useEffect, useRef } from "react";
import useDebounce from "utils/useDebounce";
import Spinner from "components/Spinner";
import { observer } from "mobx-react-lite";
import { useStore } from "store";
import { toJS } from "mobx";
import RecipesList from "./RecipesList";
import SearchingPanel from "./SearchingPanel";
import isEqual from "lodash.isequal";

const SearchingRecipesPage = observer(() => {
  const { recipeStore } = useStore();
  const { filters, isLoading } = toJS(recipeStore);
  const { loadRecipes } = recipeStore;

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
    checkboxFiltersRef.current = {
      ...filters.diet,
      ...filters.cuisineType,
    };
  }
  useEffect(() => {
    loadRecipes();
  }, [debouncedVal, checkboxFiltersRef.current]);

  return (
    <>
      {isLoading && (
        <div className="absolute h-full w-full">
          <Spinner />
        </div>
      )}

      <div className="grid grid-cols-[minmax(200px,400px),_1fr]">
        <SearchingPanel />
        <RecipesList />
      </div>
    </>
  );
});

export default SearchingRecipesPage;
