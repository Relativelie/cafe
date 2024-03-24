import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { onScrollToTop } from 'utils/onScrollToTop';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    onScrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
