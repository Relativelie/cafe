import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';
import { useAppSelector } from 'utils/hooks';

export const PieChartTable = () => {
  const { ingredients } = useAppSelector((state) => state.analyst);
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <table
      style={{ borderColor: theme.colors.opacityDefaultInverse }}
      className='w-full table-auto border-spacing-1 text-left border border-separate border-1 rounded-lg'
    >
      <thead>
        <tr>
          <th>{t('analyst.ingredient')}</th>
          <th>{t('analyst.fat')}</th>
          <th>{t('analyst.protein')}</th>
          <th>{t('analyst.carbs')}</th>
        </tr>
      </thead>
      <tbody>
        {ingredients?.map((ingredient) => (
          <tr key={`${ingredient.label}-pieChartTable`}>
            <td>
              {ingredient.label}, {ingredient.measure}
            </td>
            <td>{ingredient.fat.toFixed(1)}</td>
            <td>{ingredient.protein.toFixed(1)}</td>
            <td>{ingredient.carbs.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
