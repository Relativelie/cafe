import { useAppSelector } from 'utils/storeHooks';
import { NutritionClaims } from './NutritionClaims';
import { NutritionFacts } from './NutritionFacts';
import { PieChartTable } from './PieChartTable';

const NutritionDetails = () => {
  const { totalNutrient, healthLabels } = useAppSelector((state) => state.analyst);

  return (
    <section className='flex flex-col gap-8 px-8' aria-labelledby='Result of analysis'>
      {totalNutrient && <PieChartTable />}
      {totalNutrient && <NutritionFacts />}
      {healthLabels?.length && <NutritionClaims labels={healthLabels} />}
    </section>
  );
};

export default NutritionDetails;
