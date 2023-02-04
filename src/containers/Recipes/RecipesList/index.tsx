import { RecipeCard, ToUpButton } from "components";
import URLS from "constants/urls";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import { RecipeType } from "stores/recipes";

const RecipesList: React.FC = observer(() => {
  const navigate = useNavigate();
  const { recipeStore } = useStore();
  const { recipesData, isLoading, nextPage } = toJS(recipeStore);
  const { onClickRecipe, loadNextRecipesList } = recipeStore;

  const { ref, inView } = useInView({
    triggerOnce: false,
    fallbackInView: true,
  });

  useEffect(() => {
    if (inView && !isLoading) {
      loadNextRecipesList();
    }
  }, [inView]);

  const onClickRecipeCard = (recipe: RecipeType) => {
    onClickRecipe(recipe);
    navigate(URLS.RECIPES.RECIPE);
  };

  return (
    <div className="relative mt-8 p-4">
      <div className="fixed bottom-10 z-10">
        <ToUpButton />
      </div>

      {
        <div className="flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10">
          {recipesData ? (
            recipesData &&
            recipesData.map((recipe) => {
              return (
                <RecipeCard
                  key={`${recipe.url}-${recipe.calories}-recipe`}
                  recipe={recipe}
                  onClick={() => onClickRecipeCard(recipe)}
                />
              );
            })
          ) : (
            <div className="h-screen flex flex-col justify-center items-center">
              <h3>We couldn't find any matches</h3>
              <h3>
                Double check your search for any typos or spelling errors - or try a
                different search term.
              </h3>
            </div>
          )}
        </div>
      }
      {nextPage && <div ref={ref} className="mb-4" />}
    </div>
  );
});

export default RecipesList;