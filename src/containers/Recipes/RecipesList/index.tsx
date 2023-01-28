import RecipeCard from "components/RecipeCard";
import URLS from "constants/urls";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import { RecipeType } from "stores/recipes/models";

const RecipesList: React.FC = observer(() => {
  const navigate = useNavigate();
  const { recipeStore } = useStore();
  const { recipesData } = toJS(recipeStore);
  const { onClickRecipe } = recipeStore;

  const onClickRecipeCard = (recipe: RecipeType) => {
    onClickRecipe(recipe);
    navigate(URLS.RECIPES.RECIPE);
  };

  return (
    <div className="mt-8 p-4 ">
      <div className="flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10">
        {recipesData &&
          recipesData.map((recipe) => {
            return (
              <RecipeCard
                key={`${recipe.label}-recipe`}
                recipe={recipe}
                onClick={() => onClickRecipeCard(recipe)}
              />
            );
          })}
      </div>
    </div>
  );
});

export default RecipesList;
