import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { TotalNutrient } from './TotalNutrient';
import { IngredientsList } from './IngredientsList';

export const NutritionFacts = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className='flex justify-center'>
      <div
        style={{ borderColor: theme.colors.opacityDefaultInverse }}
        className='flex flex-col gap-4 p-4 w-2/3 rounded-xl border'
      >
        <div className='border-b-2 border-white'>
          <h2>{t('analyst.nutritionFact')}</h2>
        </div>

        <TotalNutrient />
        <IngredientsList />
      </div>
    </div>
  );
};
