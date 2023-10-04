import { useTranslation } from 'react-i18next';
import ContentTitle from './ContentTitle';

type NutritionProps = {
  calories: number;
  totalWeight: number;
  totalDaily: string;
};

const Nutrition: React.FC<NutritionProps> = ({
  calories,
  totalDaily,
  totalWeight,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <ContentTitle text={t('recipes.nutrition')} />
      <div className="flex justify-center gap-10">
        <div>
          <h5 className="font-semibold text-center">
            {Math.round((calories * 100) / totalWeight)}
          </h5>
          <h5 className="uppercase">calories/100g</h5>
        </div>
        <div>
          <h5 className="font-semibold text-center">{totalDaily}</h5>
          <h5 className="uppercase">daily value</h5>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
