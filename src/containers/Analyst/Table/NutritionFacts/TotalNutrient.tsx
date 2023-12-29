import TotalNutrientEntity from 'store/analyst/models/TotalNutrientEntity';
import { NutritionItem } from './NutritionItem';
import { useTranslation } from 'react-i18next';

type TotalNutrientProps = {
  totalNutrient: TotalNutrientEntity;
};

export const TotalNutrient: React.FC<TotalNutrientProps> = ({ totalNutrient }) => {
  const { t } = useTranslation();
  const { vitaRae, protein, tocpha, chocdf, mg, ca } = totalNutrient;

  return (
    <>
      <h3>{t('analyst.totalNutrients')}</h3>
      <NutritionItem title={t('analyst.vitA')} value={vitaRae} />
      <NutritionItem title={t('analyst.protein')} value={protein} />
      <NutritionItem title={t('analyst.vitE')} value={tocpha} />
      <NutritionItem title={t('analyst.carbs')} value={chocdf} />
      <NutritionItem title={t('analyst.magnesium')} value={mg} />
      <NutritionItem title={t('analyst.calcium')} value={ca} />
    </>
  );
};
