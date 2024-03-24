import { useState } from 'react';
import { useTheme } from 'theme/themeProvider';
import SettingsIcon from 'assets/icons/SettingsIcon';
import SettingsModal from './SettingsModal';
import { AppModal } from 'components';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { theme } = useTheme();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className='cursor-pointer' onClick={showModal} aria-label={t('header.settings')}>
        <SettingsIcon style={{ color: theme.colors.defaultInverse }} className='fill-current' />
      </button>
      <AppModal isOpen={modalIsOpen} onClose={closeModal}>
        <SettingsModal closeModal={closeModal} />
      </AppModal>
    </>
  );
};

export default Settings;
