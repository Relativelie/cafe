type NutritionItemProps = {
  title: string;
  value: number | string;
};

export const NutritionItem: React.FC<NutritionItemProps> = ({
  title,
  value,
}) => {
  const showedValue = typeof value === 'string' ? value : value.toFixed(1);

  return (
    <div>
      <div className="flex justify-between p-2">
        <p>{title}</p>
        <p>{showedValue}</p>
      </div>
      <hr />
    </div>
  );
};
