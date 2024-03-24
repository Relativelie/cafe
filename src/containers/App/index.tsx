import ErrorBoundaries from 'components/ErrorBoundary';
import { I18nextProvider } from 'react-i18next';
import { NotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import ScrollToTop from 'containers/App/ScrollToTop';
import { ThemeProvider } from 'theme/themeProvider';
import i18n from 'i18n/i18n.config';
import InitializeAppSettings from 'containers/App/InitializeAppSettings';

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
          <InitializeAppSettings />
          <ErrorBoundaries>
            <AppRoutes />
            <NotificationToaster />
          </ErrorBoundaries>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
