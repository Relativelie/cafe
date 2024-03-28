import { useTranslation } from 'react-i18next';
import { NutritionItem } from './NutritionItem';
import IngredientEntity from 'store/analyst/models/IngredientEntity';

type IngredientItemProps = {
  ingredient: IngredientEntity;
};

export const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient }) => {
  const { t } = useTranslation();
  const { enercKcal, label, measure, fat, protein, carbs, mg, ca, vitaRae } = ingredient;

  const nutritionItems = [
    { title: t('analyst.calories'), value: enercKcal },
    { title: t('analyst.fat'), value: fat },
    { title: t('analyst.vitA'), value: vitaRae },
    { title: t('analyst.protein'), value: protein },
    { title: t('analyst.carbs'), value: carbs },
    { title: t('analyst.magnesium'), value: mg },
    { title: t('analyst.calcium'), value: ca },
  ];

  return (
    <>
      <div className='flex justify-between md:px-4'>
        <h4>{label}</h4>
        <p>{measure}</p>
      </div>
      <div className='md:px-12'>
        {nutritionItems.map((item, index) => (
          <NutritionItem key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </>
  );
};
