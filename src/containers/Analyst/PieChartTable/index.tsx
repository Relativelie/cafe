import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';

export const PieChartTable = observer(() => {
  const { analystStore } = useStore();
  const { ingredients } = toJS(analystStore);

  return (
    <table className="w-full table-auto border-spacing-1 text-left border border-separate  border-1 rounded-lg border-slate-500">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Fat</th>
          <th>Protein</th>
          <th>Carbs</th>
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
