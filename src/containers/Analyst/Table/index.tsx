import { toJS } from 'mobx';
import { useStore } from 'store';
import { NutritionClaims } from './NutritionClaims';
import { NutritionFacts } from './NutritionFacts';
import { PieChartTable } from './PieChartTable';

const Table = () => {
  const { analystStore } = useStore();
  const { isLoading, healthLabels, totalNutrient } = toJS(analystStore);

  return (
    <div className="flex flex-col gap-8 px-8">
      {totalNutrient && !isLoading && <PieChartTable />}
      {totalNutrient && !isLoading && <NutritionFacts />}
      {healthLabels?.length && !isLoading && (
        <NutritionClaims labels={healthLabels} />
      )}
    </div>
  );
};

export default Table;
