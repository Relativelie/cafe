import { useCallback, useEffect, useRef } from 'react';

import AboutAnalyst from './AboutAnalyst';
import { NutrientPieChart } from './PieChartGraph';
import TextAnalysisInput from './AnalystInput';
import NutritionDetails from './NutritionDetails';
import { usePostAnalystMutation } from 'services/analyst';
import { useAppDispatch, useAppSelector } from 'utils/storeHooks';
import { resetAnalystState } from 'store/analyst/analystSlice';
import FullScreenLoader from 'components/FullScreenLoader';

export const Analyst = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [trigger, { isLoading }] = usePostAnalystMutation();
  const { totalNutrient } = useAppSelector((state) => state.analyst);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetAnalystState());
    };
  }, []);

  const onClickAnalyze = useCallback((arg: string[]) => {
    trigger(arg);
  }, []);

  const onClickReadyBtn = useCallback(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <div className='flex flex-col gap-8 pb-12'>
      <AboutAnalyst onClick={onClickReadyBtn} />

      {isLoading && <FullScreenLoader />}

      <div className='flex flex-col items-center md:flex-row gap-4 pt-8 px-8'>
        <div className='w-3/4'>
          {totalNutrient && !isLoading && <NutrientPieChart totalNutrient={totalNutrient} />}
        </div>
        <TextAnalysisInput textAreaRef={textAreaRef} postAnalyst={onClickAnalyze} />
      </div>

      {!isLoading && <NutritionDetails />}
    </div>
  );
};
