type NutritionItemProps = {
  title: string;
  value: string;
};

export const NutritionItem: React.FC<NutritionItemProps> = ({ title, value }) => {
  return (
    <div>
      <div className="flex justify-between p-2">
        <p>{title}</p>
        <p>{value}</p>
      </div>

      <hr />
    </div>
  );
};
