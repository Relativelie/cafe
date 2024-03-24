import { Chart } from 'react-google-charts';
import { useTheme } from 'theme/themeProvider';

const chartOptions = {
  colors: ['#EF6262', '#FFC95F', '#A0C49D'],
  tooltip: { trigger: 'none' },
  legend: { position: 'none' },
  chartArea: { top: 0, bottom: 0 },
};

type ChartProps = {
  protein: string;
  chocdf: string;
  fasat: string;
};

const AnalystChart: React.FC<ChartProps> = ({ protein, fasat, chocdf }) => {
  const { theme } = useTheme();

  const chartData = [
    ['Fat', 'Percentage'],
    ['Fatty acids, total saturated', parseInt(fasat)],
    ['Carbs', parseInt(chocdf)],
    ['Protein', parseInt(protein)],
  ];

  return (
    <Chart
      chartType='PieChart'
      data={chartData}
      options={{ ...chartOptions, backgroundColor: theme.colors.default }}
    />
  );
};

export default AnalystChart;
