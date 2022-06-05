import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { HighlightProvider } from './contexts/Highlight';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HighlightProvider>
      <App />
    </HighlightProvider>
  </React.StrictMode>
);
