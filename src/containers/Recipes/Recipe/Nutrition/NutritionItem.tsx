type NutritionItemProps = {
  value: string | number;
  description: string;
};

const NutritionItem: React.FC<NutritionItemProps> = ({ value, description }) => {
  return (
    <div>
      <h5 className='font-semibold text-center'>{value}</h5>
      <h5 className='uppercase'>{description}</h5>
    </div>
  );
};

export default NutritionItem;
