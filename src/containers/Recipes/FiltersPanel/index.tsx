import { useTranslation } from 'react-i18next';

import { Button, ButtonSize } from 'components';
import useScrollToTop from 'utils/useScrollToTop';
import { useAppSelector } from 'utils/storeHooks';
import SearchInput from './SearchInput';
import { Container } from './Container';
import Filters from './Filters';
import clsx from 'clsx';
import { memo } from 'react';

type SearchingPanelProps = {
  isMobileView?: boolean;
  closeModal?: () => void;
};

const SearchingPanel: React.FC<SearchingPanelProps> = memo(function SearchingPanel({
  isMobileView = false,
  closeModal,
}) {
  const filters = useAppSelector((state) => state.recipes.filters);
  const { t } = useTranslation();

  useScrollToTop([filters.q, filters.cuisineType, filters.diet]);

  return (
    <div className={clsx(!isMobileView && 'relative')}>
      <Container isMobileView={isMobileView}>
        <SearchInput value={filters.q} isMobileView={isMobileView} />
        <Filters />
      </Container>

      {isMobileView && (
        <Button size={ButtonSize.full} onClick={closeModal}>
          {t('common.close')}
        </Button>
      )}
    </div>
  );
});

export default SearchingPanel;
