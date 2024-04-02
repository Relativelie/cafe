import { selectRecipe } from 'store/recipes/recipesSlice';
import RecipeEntity from 'store/recipes/models/RecipeEntity';
import RecipeCard from './RecipeCard';
import { useAppDispatch } from 'utils/storeHooks';
import { useNavigate } from 'react-router-dom';

import URLS from 'constants/urls';

type RecipesItemsProps = {
  recipes: RecipeEntity[];
};

export const RecipesItems: React.FC<RecipesItemsProps> = ({ recipes }) => {
  const dispatch = useAppDispatch();

  const onClickRecipeCard = (recipe: RecipeEntity) => {
    const navigate = useNavigate();
    dispatch(selectRecipe(recipe.uri));
    navigate(URLS.RECIPES.RECIPE);
  };

  return (
    <>
      {recipes.map((recipe) => {
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
