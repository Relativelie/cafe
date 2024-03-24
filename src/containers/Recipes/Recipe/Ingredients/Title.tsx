import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

type Title = { count: number };

const Title: React.FC<Title> = ({ count }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <h3 style={{ color: theme.colors.success }} className='font-semibold'>
      {t('recipes.ingredients', { count })}
    </h3>
  );
};
export default Title;
