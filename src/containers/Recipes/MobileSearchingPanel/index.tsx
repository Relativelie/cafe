import Modal from 'react-modal';
import FilterIcon from 'assets/icons/FilterIcon';
import { useState } from 'react';
import SearchingPanel from '../SearchingPanel';
import { useLocation } from 'react-router-dom';
import URLS from 'constants/urls';
import { useTheme } from 'theme/themeProvider';

const MobileSearchingPanel = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [modalIsOpen, setIsOpen] = useState(false);

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
    },
    overlay: { zIndex: 40, backgroundColor: 'rgba(255, 255, 255, .3)' },
  };

  const isRecipeListPage = (): boolean => URLS.RECIPES.SEARCH === location.pathname;

  return (
    <div className='lg:hidden relative h-10 z-10'>
      <div className='fixed flex justify-end items-center h-14 top-20 right-0'>
        {isRecipeListPage() && (
          <div
            style={{
              backgroundColor: theme.colors.lightBrand,
              borderColor: theme.colors.defaultInverse,
            }}
            onClick={showModal}
            className='p-3 mr-4 rounded-full border-2 cursor-pointer'
          >
            <FilterIcon />
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        ariaHideApp={false}
      >
        <SearchingPanel isMobileView closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default MobileSearchingPanel;
