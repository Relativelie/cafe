type ChartLegendItemProp = {
  bgColor: string;
  title: string;
};

export const ChartLegendItem: React.FC<ChartLegendItemProp> = ({ bgColor, title }) => {
  return (
    <div className="flex gap-2">
      <div className={`rounded-full w-4 h-4 ${bgColor}`}></div>
      <h5>{title}</h5>
    </div>
  );
};
