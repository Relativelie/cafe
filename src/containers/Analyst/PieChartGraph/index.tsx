import { useTranslation } from 'react-i18next';
import TotalNutrientEntity from 'store/analyst/models/TotalNutrientEntity';
import AnalystChart from './Chart';
import LegendList from './LegendList';

type NutrientPieChartProps = {
  totalNutrient: TotalNutrientEntity;
};

export const NutrientPieChart: React.FC<NutrientPieChartProps> = ({ totalNutrient }) => {
  const { t } = useTranslation();
  const { fat, protein, chocdf, fasat } = totalNutrient;

  return (
    <div className='w-3/4'>
      <div className='flex flex-col md:flex-row items-center'>
        <h4>
          {t('analyst.totalLipid')} <span className='font-bold'>{fat}</span>
        </h4>

        <AnalystChart protein={protein} chocdf={chocdf} fasat={fasat} />
        <LegendList />
      </div>
    </div>
  );
};
