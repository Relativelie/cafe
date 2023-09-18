import { Chart } from 'react-google-charts';
import { ChartLegendItem } from './ChartLegendItem';
import { TotalNutrientsType } from 'stores/analyst';

const chartBgColor = '#18181b';

type PieChartGraphProps = {
  totalNutrient: TotalNutrientsType;
};

export const PieChartGraph: React.FC<PieChartGraphProps> = ({ totalNutrient }) => {
  const { fat, protein, chocdf, fasat } = totalNutrient;

  return (
    <div className="flex flex-col md:flex-row items-center">
      <h4>
        Total lipid (fat) <span className="font-bold">{fat}</span>
      </h4>
      <Chart
        chartType="PieChart"
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
          backgroundColor: chartBgColor,
        }}
      />
      <div className="flex flex-col gap-4">
        <ChartLegendItem bgColor="bg-[#EF6262]" title="Fatty acids, total saturated" />
        <ChartLegendItem bgColor="bg-[#FFC95F]" title="Carbs" />
        <ChartLegendItem bgColor="bg-[#A0C49D]" title="Protein" />
      </div>
    </div>
  );
};
