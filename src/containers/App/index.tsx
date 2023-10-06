import ErrorBoundaries from 'components/ErrorBoundary';
import { AppNotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ScrollToTop from 'utils/useScrollToTop';
import { ThemeProvider } from 'theme/themeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n/i18n.config';

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
        <I18nextProvider i18n={i18n}>
          <ScrollToTop />
          <ErrorBoundaries>
            <AppRoutes />
            <AppNotificationToaster />
          </ErrorBoundaries>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
