import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'utils/storeHooks';
import { BackButton } from 'components';
import Header from './RecipeTitle';
import Nutrition from './Nutrition';
import DietType from './DietType';
import Ingredients from './Ingredients';

const Recipe = () => {
  const { selectedRecipe } = useAppSelector((state) => state.recipes);
  const { t } = useTranslation();

  const showDietTypes = selectedRecipe && selectedRecipe.dietLabels.length > 0;
  return (
    <>
      {selectedRecipe && (
        <div className='h-screen flex flex-col gap-6 lg:gap-10'>
          <div className='h-64 grid grid-cols-[80px_1fr_80px] grid-rows-[50px_1fr_80px] bg-recipe-poster bg-cover bg-center'>
            <BackButton title={t('recipes.backToList')} />
            <Header title={selectedRecipe.label} />
          </div>
          <Nutrition
            calories={selectedRecipe.calories}
            totalWeight={selectedRecipe.totalWeight}
            totalDaily={selectedRecipe.totalDaily}
          />
          {showDietTypes && <DietType title={selectedRecipe.dietLabels.toString()} />}
          <Ingredients image={selectedRecipe.image} ingredients={selectedRecipe.ingredientLines} />
        </div>
      )}
    </>
  );
};

export default Recipe;
