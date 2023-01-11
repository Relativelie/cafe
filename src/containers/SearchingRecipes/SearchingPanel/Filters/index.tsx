import { Checkbox } from "components";
import { useDispatch, useSelector } from "react-redux";
import { DietEnum } from "store/reducers/recipesReducer/models";
import { onChangeFilter } from "store/reducers/recipesReducer/reducer";
import { recipesFilters } from "store/selectors";

const allFilters = [
  {
    label: "Diet",
    block: "diet",
    availableValues: [
      { label: "balanced", key: DietEnum.balanced },
      { label: "high-fiber", key: DietEnum.highFiber},
      { label: "low-carb", key: DietEnum.lowCarb },
      { label: "low-fat", key: DietEnum.lowFat },
      { label: "high-protein", key: DietEnum.highProtein },
      { label: "low-sodium", key: DietEnum.lowSodium },
    ],
  },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(recipesFilters);

  return (
    <div>
      {allFilters.map((filter) => (
        <div>
          <p>{filter.label}</p>
          {filter.availableValues.map((item) => (
            <Checkbox
              label={item.label}
              checked={filters.diet[item.key]}
              onChange={(value) =>
                dispatch(onChangeFilter({ blockItemKey: item.key, value, block: "diet" }))
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filters;
