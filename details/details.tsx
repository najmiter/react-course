import '@/index.css';
import ReactDOM from 'react-dom/client';

import DetailsPage from '../src/pages/Details';
import ThemeProvider from '../src/contexts/theme-provider';

ReactDOM.createRoot(document.getElementById('details-page')!).render(
  <ThemeProvider>
    <DetailsPage />
  </ThemeProvider>,
);
