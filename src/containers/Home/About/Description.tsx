import Title, { TitleSizesEnum } from 'components/Title';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'theme/themeProvider';

const Description = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: theme.colors.darkBrand,
        color: theme.colors.defaultInverse,
      }}
      className='h-80 md:w-72 flex flex-col items-center justify-around text-center p-2'
    >
      <Title
        size={TitleSizesEnum.MEDIUM}
        headingText={t('home.discover')}
        subHeadingText={t('home.ourWebsite')}
      />
      <h4 className='font-medium'>{t('home.about')}</h4>
    </div>
  );
};

export default Description;
