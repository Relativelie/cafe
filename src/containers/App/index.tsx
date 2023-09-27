import ErrorBoundaries from 'components/ErrorBoundary';
import { AppNotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ScrollToTop from 'utils/useScrollToTop';

export type SearchingData = {
  recipe: {
    ingredientLines: string[];
    label: string;
    image: string;
  };
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundaries>
        <AppRoutes />
        <AppNotificationToaster />
      </ErrorBoundaries>
    </BrowserRouter>
  );
}

export default App;
