import Button, { ButtonSizeENUM } from 'components/Button';
import { useTranslation } from 'react-i18next';

export const AboutAnalyst: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-5 items-center gap-5 bg-analyst-poster bg-cover bg-center shadow-lg shadow-rose-500/20">
      <>
        <h2 className="text-6xl font-dance text-shadow-lg">{t('analyst.quotes1')}</h2>
        <h2 className="text-6xl font-dance text-shadow-lg">{t('analyst.quotes2')}</h2>
      </>
      <div className="w-2/3">
        <h5 className="text-lg text-center font-semibold text-shadow-lg">
          {t('analyst.description')}
        </h5>
      </div>

      <Button size={ButtonSizeENUM.sm}>{t('analyst.ready')}</Button>
    </div>
  );
};
