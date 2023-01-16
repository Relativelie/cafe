import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "store/reducers/recipesReducer/reducer";
import { recipesFilters } from "store/selectors";
import { AppDispatch } from "store/store";
import useDebounce from "utils/useDebounce";
import SearchingPanel from "./SearchingPanel/SearchingPanel";
import RecipesList from "./RecipesList";

const SearchingRecipesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(recipesFilters);
  const debouncedVal = useDebounce<string>(filters.q, 1000);
  const checkboxFilters: any = {...filters}
  delete checkboxFilters.q;

  useEffect(() => {
    dispatch(loadRecipes(filters));
  }, [debouncedVal, checkboxFilters]);

  // grid grid-cols-[minmax(200px,400px),_1fr]
  return (
    <div className="flex">
      <SearchingPanel />
      <RecipesList />
    </div>
  );
};

export default SearchingRecipesPage;
