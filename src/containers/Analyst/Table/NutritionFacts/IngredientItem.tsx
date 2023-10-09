import { useTranslation } from 'react-i18next';
import { NutritionItem } from './NutritionItem';
import { IngredientType } from 'stores/analyst';

type IngredientItemProps = {
  ingredient: IngredientType;
};

export const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
}) => {
  const { t } = useTranslation();
  const { enercKcal, label, measure, fat, protein, carbs, mg, ca, vitaRae } =
    ingredient;

  return (
    <div>
      <div className="flex justify-between px-4">
        <h4>{label}</h4>
        <p>{measure}</p>
      </div>
      <div className="px-12">
        <NutritionItem
          title={t('analyst.calories')}
          value={enercKcal.toString()}
        />
        <NutritionItem title={t('analyst.fat')} value={fat.toString()} />
        <NutritionItem title={t('analyst.vitA')} value={vitaRae.toString()} />
        <NutritionItem
          title={t('analyst.protein')}
          value={protein.toString()}
        />
        <NutritionItem title={t('analyst.carbs')} value={carbs.toString()} />
        <NutritionItem title={t('analyst.magnesium')} value={mg.toString()} />
        <NutritionItem title={t('analyst.calcium')} value={ca.toString()} />
      </div>
    </div>
  );
};
