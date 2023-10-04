import ErrorBoundaries from 'components/ErrorBoundary';
import { AppNotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ScrollToTop from 'utils/useScrollToTop';
import { ThemeProvider } from 'theme/themeProvider';

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
      <ThemeProvider>
        <ScrollToTop />
        <ErrorBoundaries>
          <AppRoutes />
          <AppNotificationToaster />
        </ErrorBoundaries>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
