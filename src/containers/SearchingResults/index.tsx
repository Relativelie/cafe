import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RecipesRes } from "services/recipes/models";
import { getRecipes } from "services/recipes/recipes";
import { loadRecipes } from "store/reducers/recipesReducer";

import { recipesData, recipesFilters } from "store/selectors";
import { AppDispatch } from "store/store";
import useDebounce from "utils/useDebounce";

type SearchingProps = {
  setSearchingVal?: Dispatch<SetStateAction<string>>;
  searchingVal?: string;
};

const SearchingResults: React.FC<SearchingProps> = ({
  setSearchingVal,
  searchingVal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const recipes = useSelector(recipesData);
  const filters = useSelector(recipesFilters);


  const debouncedVal = useDebounce<string>(filters.q, 1000);

  useEffect(() => {
    dispatch(loadRecipes(filters));
    // вставить в зависимость остальные фильтры за исключением поиска
  }, [debouncedVal]);

  const location = useLocation();
  // const filters = location.state !== null ? location.state : undefined;
  console.log(filters);
console.log(recipes)
  // useEffect(() => {
  //   console.log(filters);
  //   getRecipes(filters).then((res) => setData(res));
  //   console.log(data);
  // }, [filters]);

  // const handleInputChange = (newVal: string) => {
  //   setSearchingVal(newVal);
  // };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[minmax(200px,_600px)] justify-center">
        {/* <Input
          curVal={searchingVal}
          handleInputChange={handleInputChange}
          leftIcon={<SearchIcon />}
        /> */}
      </div>
    </div>
  );
};

export default SearchingResults;
