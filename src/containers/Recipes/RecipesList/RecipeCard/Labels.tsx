import { useTheme } from 'theme/themeProvider';

const getLabels = (labels: string[]) => {
  const fittedLabelCount = 3;
  return labels.length > fittedLabelCount ? labels.slice(0, fittedLabelCount) : labels;
};

type LabelsProps = {
  dietLabels: string[];
  cuisineType: string[];
};

const Labels: React.FC<LabelsProps> = ({ dietLabels, cuisineType }) => {
  const { theme } = useTheme();

  return (
    <div className='flex flex-wrap gap-x-2 '>
      {getLabels(dietLabels).map((item) => (
        <p key={`${item}-diet-label`} style={{ color: theme.colors.default }}>
          #{item.toLowerCase()}
        </p>
      ))}
      {getLabels(cuisineType).map((item) => (
        <p key={`${item}-cousine-label`} style={{ color: theme.colors.default }}>
          #{item}
        </p>
      ))}
    </div>
  );
};

export default Labels;
