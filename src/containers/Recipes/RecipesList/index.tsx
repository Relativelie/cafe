import RecipeCard from "components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { onChangeSelectedVal } from "store/reducers/recipesReducer/reducer";
import { recipesData } from "store/selectors";

const RecipesList: React.FC = ({}) => {
  const recipes = useSelector(recipesData);
  const dispatch = useDispatch();

  return (
    <div className="mt-8 p-4 ">
      <div className="flex justify-center flex-wrap gap-x-4 xl:gap-x-8 gap-y-10">
        {recipes &&
          recipes.recipes.map(({ recipe }) => {
            return (
              <RecipeCard
                key={`${recipe.label}-recipe`}
                recipe={recipe}
                onClick={() => dispatch(onChangeSelectedVal({ recipe }))}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecipesList;
