import { TextArea } from 'components';
import { useTranslation } from 'react-i18next';

import { NutritionClaims } from '../NutritionClaims';
import { PieChartGraph } from '../PieChartGraph';
import { PieChartTable } from '../PieChartTable';
import { NutritionFacts } from '../NutritionFacts';

export const ResultPanel = () => {
  const { t } = useTranslation();
  const onChangeFilter = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <div className="flex flex-col-reverse items-center md:flex-row gap-4 p-8">
        <div className="flex flex-col gap-12 w-2/3">
          <PieChartGraph />
          <PieChartTable />
          <NutritionClaims />
        </div>
        <div className="h-96 w-full md:w-1/3">
          <TextArea placeholder={`${t('analyst.write')} \n ${t('analyst.example')}`} />
        </div>
      </div>
      <NutritionFacts />
    </div>
  );
};
