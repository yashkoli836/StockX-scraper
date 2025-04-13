import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css'; // Ensure this file exists for global styles
import HomePage from './pages/HomePage';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);