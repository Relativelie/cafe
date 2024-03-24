import { selectRecipe } from 'store/recipes/recipesSlice';
import RecipeEntity from 'store/recipes/models/RecipeEntity';
import RecipeCard from './RecipeCard';
import { useAppDispatch, useAppSelector } from 'utils/storeHooks';
import { useNavigate } from 'react-router-dom';

import URLS from 'constants/urls';

export const RecipesItems = () => {
  const { recipes } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();

  const onClickRecipeCard = (recipe: RecipeEntity) => {
    const navigate = useNavigate();
    dispatch(selectRecipe(recipe.uri));
    navigate(URLS.RECIPES.RECIPE);
  };

  return (
    <>
      {recipes!.map((recipe) => {
        return (
          <RecipeCard
            key={`${recipe.uri}-${recipe.calories}`}
            recipe={recipe}
            onClick={() => onClickRecipeCard(recipe)}
          />
        );
      })}
    </>
  );
};
