import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import URLS from 'constants/urls';
import SearchingPanel from '../FiltersPanel';
import { AppModal } from 'components';
import FilterButton from './FilterButton';

const MobileSearchingPanel = () => {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='lg:hidden fixed right-0 h-10 z-10'>
      {URLS.RECIPES.SEARCH === location.pathname && <FilterButton showModal={showModal} />}

      <AppModal isOpen={modalIsOpen} onClose={closeModal} isMobile>
        <SearchingPanel isMobileView closeModal={closeModal} />
      </AppModal>
    </div>
  );
};

export default MobileSearchingPanel;
