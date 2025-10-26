import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';
import { AppProvider } from './app/provider';

// Start MSW in development (disabled for now - using mock server instead)
// if (import.meta.env.DEV) {
//   const { worker } = await import('./testing/mocks/browser');
//   worker.start({
//     onUnhandledRequest: 'bypass',
//   });
// }

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
