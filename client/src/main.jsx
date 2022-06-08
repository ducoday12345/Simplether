import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css'
import App from './App'
import { TransactionProvider } from './context/TransactionContext';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>
)