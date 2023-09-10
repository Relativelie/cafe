import { toJS } from 'mobx';
import { useStore } from 'store';
import { ResultPanel } from './ResultPanel';
import { AboutAnalyst } from './AboutAnalyst';

export const Analyst = () => {
  const { analystStore } = useStore();
  const { ingredients, totalNutrient } = toJS(analystStore);
  const { getNutrition } = analystStore;
  // getNutrition(["1kg cherry"]);
  console.log(ingredients, totalNutrient);
  return (
    <div className="pb-12">
      <AboutAnalyst />
      <ResultPanel />
    </div>
  );
};
