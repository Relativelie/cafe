import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useStore } from 'store';
import { useTheme } from 'theme/themeProvider';

export const PieChartTable = observer(() => {
  const { analystStore } = useStore();
  const { ingredients } = toJS(analystStore);
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <table
      style={{ borderColor: theme.colors.opacityDefaultInverse }}
      className="w-full table-auto border-spacing-1 text-left border border-separate border-1 rounded-lg"
    >
      <thead>
        <tr>
          <th> {t('analyst.ingredient')}</th>
          <th>{t('analyst.fat')}</th>
          <th>{t('analyst.protein')}</th>
          <th>{t('analyst.carbs')}</th>
        </tr>
      </thead>
      <tbody>
        {ingredients?.map((ingredient) => (
          <tr>
            <td>
              {ingredient.label}, {ingredient.measure}
            </td>
            <td>{ingredient.fat}</td>
            <td>{ingredient.protein}</td>
            <td>{ingredient.carbs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
