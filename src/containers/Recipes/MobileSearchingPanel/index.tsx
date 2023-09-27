import Modal from 'react-modal';
import FilterIcon from 'assets/icons/FilterIcon';
import { useState } from 'react';
import SearchingPanel from '../SearchingPanel';
import { useLocation } from 'react-router-dom';
import URLS from 'constants/urls';

const customStyles: Modal.Styles = {
  content: {
    background: 'black',
    overflow: 'scroll',
  },
  overlay: { zIndex: 40, backgroundColor: 'rgba(255, 255, 255, .3)' },
};

const MobileSearchingPanel = () => {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const isRecipeListPage = (): boolean => URLS.RECIPES.SEARCH === location.pathname;

  return (
    <div className="lg:hidden relative h-10 z-10">
      <div className="fixed flex justify-end items-center h-14 top-20 right-0">
        {isRecipeListPage() && (
          <div
            onClick={showModal}
            className="p-3 mr-4 rounded-full border-2 border-blue-400 bg-green-400 cursor-pointer"
          >
            <FilterIcon />
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <SearchingPanel isMobileView closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default MobileSearchingPanel;
