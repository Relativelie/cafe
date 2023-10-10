import Modal from 'react-modal';
import SettingsIcon from 'assets/icons/SettingsIcon';
import URLS from 'constants/urls';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from 'theme/themeProvider';
import { useState } from 'react';
import Settings from './Settings';

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [modalIsOpen, setIsOpen] = useState(false);

  const routes = [
    {
      path: URLS.RECIPES.BASE,
      title: t('recipes.label'),
    },
    {
      path: URLS.ANALYST,
      title: t('analyst.label'),
    },
  ];

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customModalStyles: Modal.Styles = {
    content: {
      background: theme.colors.default,
      overflow: 'scroll',
      height: '60%',
      width: '60%',
      top: '25%',
      left: '25%',
    },

    overlay: { zIndex: 40, backgroundColor: 'rgba(255, 255, 255, .3)' },
  };

  return (
    <div className="h-16">
      <div
        style={{
          backgroundColor: theme.colors.darkBrand,
        }}
        className="fixed top-0 left-0 right-0 z-20"
      >
        <div
          style={{
            borderBottomColor: theme.colors.defaultInverse,
          }}
          className=" flex justify-between items-center mx-2 px-2 py-4 border-b-[0.5px] "
        >
          <Link to={URLS.HOME} className="font-cursive">
            {t('cafeName')}
          </Link>
          <div className="flex gap-4">
            {routes.map((route) => (
              <Link key={route.path} to={route.path}>
                <h5 className="p md:h5">{route.title}</h5>
              </Link>
            ))}
            <div className="cursor-pointer" onClick={showModal}>
              <SettingsIcon
                style={{ color: theme.colors.defaultInverse }}
                className="fill-current "
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        ariaHideApp={false}
      >
        <Settings closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Header;
