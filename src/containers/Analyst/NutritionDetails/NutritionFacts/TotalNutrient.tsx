import { NutritionItem } from './NutritionItem';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'utils/storeHooks';

export const TotalNutrient = () => {
  const { t } = useTranslation();
  const { totalNutrient } = useAppSelector((state) => state.analyst);

  const nutritionItems = [
    { title: t('analyst.vitA'), value: totalNutrient?.vitaRae },
    { title: t('analyst.protein'), value: totalNutrient?.protein },
    { title: t('analyst.vitE'), value: totalNutrient?.tocpha },
    { title: t('analyst.carbs'), value: totalNutrient?.chocdf },
    { title: t('analyst.magnesium'), value: totalNutrient?.mg },
    { title: t('analyst.calcium'), value: totalNutrient?.ca },
  ];

  return totalNutrient ? (
    <>
      <h3>{t('analyst.totalNutrients')}</h3>

      {nutritionItems.map((item, index) => (
        <NutritionItem key={index} title={item.title} value={item.value!} />
      ))}
    </>
  ) : null;
};
