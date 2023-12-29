import { AppButton, ButtonSizeENUM } from 'components';
import LanguageSettings from './LanguageSettings';
import ThemeSettings from './ThemeSettings';
import { useTranslation } from 'react-i18next';

type SettingsProps = {
  closeModal: () => void;
};

const Settings: React.FC<SettingsProps> = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col h-full w-full justify-between'>
      <div className='flex flex-col gap-6'>
        <ThemeSettings />
        <LanguageSettings />
      </div>
      <div className='self-end'>
        <AppButton size={ButtonSizeENUM.sm} onClick={closeModal}>
          {t('common.close')}
        </AppButton>
      </div>
    </div>
  );
};

export default Settings;
