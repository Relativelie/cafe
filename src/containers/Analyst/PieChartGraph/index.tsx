import { Chart } from 'react-google-charts';
import { ChartLegendItem } from './ChartLegendItem';
import { useTheme } from 'theme/themeProvider';
import { useTranslation } from 'react-i18next';

type PieChartGraphProps = {
  totalNutrient: {
    fat: string;
    protein: string;
    chocdf: string;
    fasat: string;
  };
};

export const PieChartGraph: React.FC<PieChartGraphProps> = ({ totalNutrient }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { fat, protein, chocdf, fasat } = totalNutrient;

  return (
    <div className='w-3/4'>
      {totalNutrient && (
        <div className='flex flex-col md:flex-row items-center'>
          <h4>
            {t('analyst.totalLipid')} <span className='font-bold'>{fat}</span>
          </h4>
          <Chart
            chartType='PieChart'
            data={[
              ['Fat', 'Percentage'],
              ['Fatty acids, total saturated', parseInt(fasat)],
              ['Carbs', parseInt(chocdf)],
              ['Protein', parseInt(protein)],
            ]}
            options={{
              colors: ['#EF6262', '#FFC95F', '#A0C49D'],
              chartArea: { top: 0, bottom: 0 },
              legend: { position: 'none' },
              backgroundColor: theme.colors.default,
            }}
          />
          <div className='flex flex-col gap-4'>
            <ChartLegendItem bgColor='bg-[#EF6262]' title={t('analyst.fattyAcids')} />
            <ChartLegendItem bgColor='bg-[#FFC95F]' title={t('analyst.carbs')} />
            <ChartLegendItem bgColor='bg-[#A0C49D]' title={t('analyst.protein')} />
          </div>
        </div>
      )}
    </div>
  );
};
