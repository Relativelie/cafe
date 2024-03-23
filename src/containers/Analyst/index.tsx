import { useEffect, useRef } from 'react';

import AboutAnalyst from './AboutAnalyst';
import { PieChartGraph } from './PieChartGraph';
import AnalystInput from './AnalystInput';
import Table from './Table';
import { usePostAnalystMutation } from 'services/analyst';
import { useAppDispatch, useAppSelector } from 'utils/hooks';
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

  const onClickReadyBtn = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  return (
    <div className='flex flex-col gap-8 pb-12'>
      <AboutAnalyst onClick={onClickReadyBtn} />

      {isLoading && <FullScreenLoader />}

      <div className='flex flex-col items-center md:flex-row gap-4 pt-8 px-8'>
        <div className='w-3/4'>
          {totalNutrient && !isLoading && <PieChartGraph totalNutrient={totalNutrient} />}
        </div>
        <AnalystInput textAreaRef={textAreaRef} postAnalyst={trigger} />
      </div>

      {!isLoading && <Table />}
    </div>
  );
};
