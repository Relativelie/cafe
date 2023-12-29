import { useTranslation } from 'react-i18next';

const MatchesError = () => {
  const { t } = useTranslation();
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h3>{t('recipes.matches')}</h3>
      <h3 className='text-center'>{t('recipes.matchesDescription')}</h3>
    </div>
  );
};

export default MatchesError;
