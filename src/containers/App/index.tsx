import ErrorBoundaries from 'components/ErrorBoundary';
import { AppNotificationToaster } from 'components';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

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
      <ErrorBoundaries>
        <AppRoutes />
        <AppNotificationToaster />
      </ErrorBoundaries>
    </BrowserRouter>
  );
}

export default App;
