type NutritionItemProps = {
  title: string;
  value: number | string;
};

export const NutritionItem: React.FC<NutritionItemProps> = ({ title, value }) => {
  const displayedValue = typeof value === 'string' ? value : value.toFixed(1);

  return (
    <dl className='flex justify-between p-2 border-b-2 border-white'>
      <dt>{title}</dt>
      <dd>{displayedValue}</dd>
    </dl>
  );
};
