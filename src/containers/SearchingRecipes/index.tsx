import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "store/reducers/recipesReducer/reducer";
import { recipesFilters } from "store/selectors";
import { AppDispatch } from "store/store";
import useDebounce from "utils/useDebounce";
import SearchingPanel from "./SearchingPanel/SearchingPanel";
import SearchingResults from "./SearchingResults";

const SearchingRecipesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(recipesFilters);
  const debouncedVal = useDebounce<string>(filters.q, 1000);

  useEffect(() => {
    dispatch(loadRecipes(filters));
    console.log("go in")
    // вставить в зависимость остальные фильтры за исключением поиска
  }, [debouncedVal, filters.diet]);

  return (
    <div className="grid grid-cols-[minmax(200px,400px),_1fr]">
      <SearchingPanel />
      <SearchingResults />
    </div>
  );
};

export default SearchingRecipesPage;
