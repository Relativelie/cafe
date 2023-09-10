const test = ['test1', 'test2, test3'];
export const NutritionClaims = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold">Nutrition claims</h2>
      <div className="flex gap-3">
        {test.map((item) => {
          return (
            <div className="flex items-center gap-3">
              <h4>item</h4>
              <div className="rounded-full w-2 h-2 bg-slate-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
