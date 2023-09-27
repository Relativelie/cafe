import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';
import Header from './RecipeTitle';
import Nutrition from './Nutrition';
import DietType from './DietType';
import Ingredients from './Ingredients';
import { AppBackButton } from 'components';
import { useTranslation } from 'react-i18next';

const Recipe = observer(() => {
  const { recipeStore } = useStore();
  const { selectedRecipe } = toJS(recipeStore);
  const { t } = useTranslation();

  return (
    <div>
      {selectedRecipe && (
        <div className="h-screen flex flex-col gap-4 lg:gap-10">
          <div className="h-64 grid grid-cols-[80px_1fr_80px] grid-rows-[50px_1fr_80px] bg-recipe-poster bg-cover bg-center">
            <AppBackButton title={t('recipes.backToList')} />
            <Header title={selectedRecipe.label} />
          </div>
          <Nutrition
            calories={selectedRecipe.calories}
            totalWeight={selectedRecipe.totalWeight}
            totalDaily={selectedRecipe.totalDaily}
          />
          {selectedRecipe.dietLabels.length && (
            <DietType title={selectedRecipe.dietLabels.toString()} />
          )}
          <Ingredients
            image={selectedRecipe.image}
            ingredients={selectedRecipe.ingredientLines}
          />
        </div>
      )}
    </div>
  );
});

export default Recipe;
