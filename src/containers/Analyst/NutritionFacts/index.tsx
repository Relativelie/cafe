import { observer } from 'mobx-react-lite';
import { IngredientItem } from './IngredientItem';
import { NutritionItem } from './NutritionItem';
import { toJS } from 'mobx';
import { useStore } from 'store';
import { useTranslation } from 'react-i18next';

export const NutritionFacts = observer(() => {
  const { analystStore } = useStore();
  const { totalNutrient, ingredients } = toJS(analystStore);
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 p-4 w-2/3 rounded-xl border">
        <h2 className="">{t('analyst.nutritionFact')}</h2>
        <hr />
        <h3>Total Nutrients</h3>
        <NutritionItem
          title={t('analyst.vitA')}
          value={totalNutrient!.vitaRae}
        />
        <NutritionItem
          title={t('analyst.protein')}
          value={totalNutrient!.protein}
        />
        <NutritionItem
          title={t('analyst.vitE')}
          value={totalNutrient!.tocpha}
        />
        <NutritionItem
          title={t('analyst.carbs')}
          value={totalNutrient!.chocdf}
        />
        <NutritionItem
          title={t('analyst.magnesium')}
          value={totalNutrient!.mg}
        />
        <NutritionItem title={t('analyst.calcium')} value={totalNutrient!.ca} />

        <h3>Ingredients Nutrients</h3>
        {ingredients?.map((ingredient) => (
          <IngredientItem ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
});
