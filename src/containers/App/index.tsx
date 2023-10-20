import ErrorBoundaries from 'components/ErrorBoundary';
import { I18nextProvider } from 'react-i18next';
import { AppNotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ScrollToTop from 'utils/useScrollToTop';
import { ThemeProvider } from 'theme/themeProvider';
import i18n from 'i18n/i18n.config';
import { InitFromLocalStorage } from '../InitFromLocalStorage';

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
          <InitFromLocalStorage />
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
