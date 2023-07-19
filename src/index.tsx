import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router';
import './styles/globals.scss';
import { TemplateProvider } from '../src/components/Templates/useContext/TemplateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(

  <TemplateProvider>
    <AppRouter />
  </TemplateProvider>
);

reportWebVitals();
