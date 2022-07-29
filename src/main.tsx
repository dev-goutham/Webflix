import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import apiSlice from '@/store/api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ApiProvider api={apiSlice}>
          <App />
        </ApiProvider>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
