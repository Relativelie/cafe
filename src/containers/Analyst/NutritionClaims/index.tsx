import { useTheme } from 'theme/themeProvider';

type NutritionClaimsProps = {
  labels: Array<String>;
};

export const NutritionClaims: React.FC<NutritionClaimsProps> = ({ labels }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="font-semibold">Nutrition claims</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {labels.map((label) => {
          return (
            <div className="flex items-center gap-3">
              <h5>{label}</h5>
              <div
                style={{ backgroundColor: theme.colors.opacityDefault }}
                className="rounded-full w-2 h-2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
