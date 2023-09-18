import { toJS } from 'mobx';
import { useStore } from 'store';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import AboutAnalyst from './AboutAnalyst';
import { PieChartTable } from './PieChartTable';
import { PieChartGraph } from './PieChartGraph';
import { NutritionClaims } from './NutritionClaims';
import { NutritionFacts } from './NutritionFacts';
import { AppButton, AppSpinner, AppTextArea, ButtonSizeENUM } from 'components';

export const Analyst = observer(() => {
  const { analystStore } = useStore();
  const { isLoading, healthLabels, totalNutrient, ingredients } = toJS(analystStore);
  const { getNutrition } = analystStore;
  const textareaRef = useRef<any>();

  const { t } = useTranslation();

  const onClickAnalyze = async () => {
    await getNutrition(textareaRef.current?.value.split(', '));
  };

  console.log(ingredients, totalNutrient);
  return (
    <div className="flex flex-col gap-8 pb-12">
      <AboutAnalyst />
      {isLoading && (
        <div className="fixed h-full w-full z-10 bg-slate-500/50">
          <AppSpinner />
        </div>
      )}

      <div className="flex flex-col items-center md:flex-row gap-4 pt-8 px-8">
        <div className="w-3/4">
          {totalNutrient && !isLoading && <PieChartGraph totalNutrient={totalNutrient} />}
        </div>

        <div className="h-96 w-full md:w-2/4">
          <AppTextArea
            textareaRef={textareaRef}
            placeholder={`${t('analyst.write')} \n ${t('analyst.example')}`}
          />
          <AppButton size={ButtonSizeENUM.full} onClick={onClickAnalyze}>
            Analyze
          </AppButton>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8">
        {totalNutrient && !isLoading && <PieChartTable />}
        {totalNutrient && !isLoading && <NutritionFacts />}
        {healthLabels?.length && !isLoading && <NutritionClaims labels={healthLabels} />}
      </div>
    </div>
  );
});
