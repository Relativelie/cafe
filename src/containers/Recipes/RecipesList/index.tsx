import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { RecipeCard, AppToUpButton, AppSpinner, AppSpinnerContainer } from 'components';
import URLS from 'constants/urls';
import MatchesError from './MatchesError';
import { getNextRecipes } from 'services/recipes';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
import { selectRecipe } from 'store/recipes/recipesSlice';
import RecipeEntity from 'store/recipes/models/RecipeEntity';

const RecipesList: React.FC = () => {
  const navigate = useNavigate();
  const { nextPage, recipes } = useAppSelector((state) => state.recipes);
  const [trigger, { isLoading }] = getNextRecipes.useLazyQuery();
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    triggerOnce: false,
    fallbackInView: true,
  });

  useEffect(() => {
    if (inView && !isLoading && nextPage) {
      trigger(nextPage);
    }
  }, [inView]);

  const onClickRecipeCard = (recipe: RecipeEntity) => {
    dispatch(selectRecipe(recipe.uri));
    navigate(URLS.RECIPES.RECIPE);
  };

  return (
    <div className='relative mt-8 p-4'>
      {inView && <AppSpinnerContainer />}

      <div className='fixed bottom-[15vh] z-10'>
        <AppToUpButton />
      </div>

      {
        <div className='flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10'>
          {recipes ? (
            recipes.map((recipe) => {
              return (
                <RecipeCard
                  key={`${recipe.uri}-${recipe.calories}`}
                  recipe={recipe}
                  onClick={() => onClickRecipeCard(recipe)}
                />
              );
            })
          ) : (
            <MatchesError />
          )}
        </div>
      }
      {nextPage && <div ref={ref} className='mb-4' />}
    </div>
  );
};

export default RecipesList;
