import { useTranslation } from 'react-i18next';
import { IngredientItem } from './IngredientItem';
import { useTheme } from 'theme/themeProvider';
import { TotalNutrient } from './TotalNutrient';
import { useAppSelector } from 'utils/hooks';

export const NutritionFacts = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { totalNutrient, ingredients } = useAppSelector((state) => state.analyst);

  return (
    <div className='flex justify-center'>
      <div
        style={{ borderColor: theme.colors.opacityDefaultInverse }}
        className='flex flex-col gap-4 p-4 w-2/3 rounded-xl border'
      >
        <h2>{t('analyst.nutritionFact')}</h2>
        <hr />

        {totalNutrient && <TotalNutrient totalNutrient={totalNutrient} />}

        <h3>{t('analyst.ingredientsNutrients')}</h3>
        {ingredients?.map((ingredient) => (
          <IngredientItem key={`${ingredient.label}-ingredient`} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};
