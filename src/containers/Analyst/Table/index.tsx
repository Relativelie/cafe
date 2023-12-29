import { useAppSelector } from 'utils/hooks';
import { NutritionClaims } from './NutritionClaims';
import { NutritionFacts } from './NutritionFacts';
import { PieChartTable } from './PieChartTable';

const Table = () => {
  const { totalNutrient, healthLabels } = useAppSelector((state) => state.analyst);

  return (
    <div className='flex flex-col gap-8 px-8'>
      {totalNutrient && <PieChartTable />}
      {totalNutrient && <NutritionFacts />}
      {healthLabels?.length && <NutritionClaims labels={healthLabels} />}
    </div>
  );
};

export default Table;
