type NutritionProps = {
  calories: number;
  totalWeight: number;
  totalDaily: string;
};

const Nutrition: React.FC<NutritionProps> = ({ calories, totalDaily, totalWeight }) => {
  return (
    <>
      <h3 className="text-center uppercase font-semibold text-green-300 mb-8">
        Nutrition
      </h3>
      <div className="flex justify-center gap-10">
        <div>
          <h5 className="font-semibold text-center">
            {Math.round((calories * 100) / totalWeight)}
          </h5>
          <h5 className="uppercase">calories/100g</h5>
        </div>
        <div>
          <h5 className="font-semibold text-center">{totalDaily}</h5>
          <h5 className="uppercase">daily value</h5>
        </div>
      </div>
    </>
  );
};

export default Nutrition;
