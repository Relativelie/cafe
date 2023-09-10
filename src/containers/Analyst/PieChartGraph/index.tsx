import { Chart } from 'react-google-charts';
import { ChartLegendItem } from './ChartLegendItem';

const chartBgColor = '#18181b';
export const PieChartGraph = () => {
  return (
    <div className="flex items-center">
      <p>Daily Value 2%</p>
      <Chart
        chartType="PieChart"
        data={[
          ['Fat', 'Percentage'],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
        ]}
        options={{
          colors: ['#EF6262', '#FFC95F', '#A0C49D'],
          chartArea: { top: 0, bottom: 0, width: '100%' },
          legend: { position: 'none' },
          backgroundColor: chartBgColor,
        }}
      />
      <div>
        <ChartLegendItem bgColor="bg-[#EF6262]" title="Daily Value 2%" />
        <ChartLegendItem bgColor="bg-[#FFC95F]" title="Daily Value 2%" />
        <ChartLegendItem bgColor="bg-[#A0C49D]" title="Daily Value 2%" />
      </div>
    </div>
  );
};
