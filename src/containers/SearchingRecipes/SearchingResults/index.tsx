import RecipeCard from "components/RecipeCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadRecipes } from "store/reducers/recipesReducer/reducer";

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



  // useEffect(() => {
  //   dispatch(loadRecipes(filters));
  //   // вставить в зависимость остальные фильтры за исключением поиска
  // }, [debouncedVal, filters.diet]);

  const location = useLocation();


  return (
    <div className="mt-8 p-4 ">
      <div className="flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10">
        {recipes &&
          recipes.recipes.map(({ recipe }) => {
            return (
              <RecipeCard
                image={recipe.image}
                dietLabels={recipe.dietLabels}
                cousineLabels={recipe.cuisineType}
                title={recipe.label}
                calories={Math.round(
                  (recipe.calories * 100) / recipe.totalWeight
                )}
                ingredientsCount={recipe.ingredientLines.length}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchingResults;
