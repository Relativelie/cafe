import { useAppSelector } from 'utils/storeHooks';
import { IngredientItem } from './IngredientItem';
import { useTranslation } from 'react-i18next';

export const IngredientsList = () => {
  const { t } = useTranslation();
  const { ingredients } = useAppSelector((state) => state.analyst);

  return (
    <>
      <h3>{t('analyst.ingredientsNutrients')}</h3>
      {ingredients?.map((ingredient) => (
        <IngredientItem key={`${ingredient.label}-ingredient`} ingredient={ingredient} />
      ))}
    </>
  );
};
