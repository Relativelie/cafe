import { toJS } from 'mobx';
import { useStore } from 'store';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';

import AboutAnalyst from './AboutAnalyst';
import { PieChartGraph } from './PieChartGraph';
import { AppSpinner } from 'components';
import AnalystInput from './AnalystInput';
import Table from './Table';

export const Analyst = observer(() => {
  const { analystStore } = useStore();
  const { isLoading, totalNutrient } = toJS(analystStore);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickReadyBtn = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      <AboutAnalyst onClick={onClickReadyBtn} />

      {isLoading && (
        <div className="fixed h-full w-full z-10">
          <AppSpinner />
        </div>
      )}

      <div className="flex flex-col items-center md:flex-row gap-4 pt-8 px-8">
        <div className="w-3/4">
          {totalNutrient && !isLoading && (
            <PieChartGraph totalNutrient={totalNutrient} />
          )}
        </div>
        <AnalystInput inputRef={inputRef} />
      </div>

      <Table />
    </div>
  );
});
