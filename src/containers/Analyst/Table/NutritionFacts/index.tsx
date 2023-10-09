import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { toJS } from 'mobx';
import { useStore } from 'store';
import { IngredientItem } from './IngredientItem';
import { useTheme } from 'theme/themeProvider';
import { TotalNutrient } from './TotalNutrient';

export const NutritionFacts = observer(() => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const { analystStore } = useStore();
  const { ingredients } = toJS(analystStore);

  return (
    <div className="flex justify-center">
      <div
        style={{ borderColor: theme.colors.opacityDefaultInverse }}
        className="flex flex-col gap-4 p-4 w-2/3 rounded-xl border"
      >
        <h2>{t('analyst.nutritionFact')}</h2>
        <hr />

        <TotalNutrient />

        <h3>{t('analyst.ingredientsNutrients')}</h3>
        {ingredients?.map((ingredient) => (
          <IngredientItem ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
});
