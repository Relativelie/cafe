import { Button, ButtonSize } from 'components';
import LanguageSettings from './LanguageSettings';
import ThemeSettings from './ThemeSettings';
import { useTranslation } from 'react-i18next';

type SettingsProps = {
  closeModal: () => void;
};

const SettingsModal: React.FC<SettingsProps> = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col h-full w-full justify-between'>
      <div className='flex flex-col gap-6'>
        <ThemeSettings />
        <LanguageSettings />
      </div>
      <div className='self-end'>
        <Button size={ButtonSize.sm} onClick={closeModal}>
          {t('common.close')}
        </Button>
      </div>
    </div>
  );
};

export default SettingsModal;
