import { useTranslation } from 'react-i18next';
import NutritionItem from './NutritionItem';
import { Title } from 'components';

type NutritionProps = {
  calories: number;
  totalWeight: number;
  totalDaily: string;
};

const Nutrition: React.FC<NutritionProps> = ({ calories, totalDaily, totalWeight }) => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col gap-2' aria-labelledby='Recipe nutrition'>
      <Title headingText={t('home.our')} subHeadingText={t('recipes.nutrition')} />

      <div className='flex justify-center gap-10'>
        <NutritionItem
          value={Math.round((calories * 100) / totalWeight)}
          description='calories/100g'
        />
        <NutritionItem value={totalDaily} description='daily value' />
      </div>
    </section>
  );
};

export default Nutrition;
