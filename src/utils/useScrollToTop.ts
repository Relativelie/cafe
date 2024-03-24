import { useEffect } from 'react';
import { onScrollToTop } from './onScrollToTop';

const useScrollToTop = (dependencies: React.DependencyList) => {
  useEffect(() => {
    onScrollToTop();
  }, dependencies);
};

export default useScrollToTop;
