import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

type ContentTitleProps = {
  title: string;
};

const ContentTitle: React.FC<ContentTitleProps> = ({ title }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className='flex flex-col items-center'>
      <h4 style={{ color: theme.colors.lightBrand }} className='font-cursive text-center'>
        {t('home.our')}
      </h4>
      <h2>{title}</h2>
    </div>
  );
};

export default ContentTitle;
