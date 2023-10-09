import { toJS } from 'mobx';
import { useStore } from 'store';
import { NutritionItem } from './NutritionItem';
import { useTranslation } from 'react-i18next';

export const TotalNutrient = () => {
  const { t } = useTranslation();

  const { analystStore } = useStore();
  const { totalNutrient } = toJS(analystStore);

  return (
    <>
      <h3>{t('analyst.totalNutrients')}</h3>
      <NutritionItem title={t('analyst.vitA')} value={totalNutrient!.vitaRae} />
      <NutritionItem
        title={t('analyst.protein')}
        value={totalNutrient!.protein}
      />
      <NutritionItem title={t('analyst.vitE')} value={totalNutrient!.tocpha} />
      <NutritionItem title={t('analyst.carbs')} value={totalNutrient!.chocdf} />
      <NutritionItem title={t('analyst.magnesium')} value={totalNutrient!.mg} />
      <NutritionItem title={t('analyst.calcium')} value={totalNutrient!.ca} />
    </>
  );
};
