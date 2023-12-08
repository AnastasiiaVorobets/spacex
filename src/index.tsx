import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import store from './store/store';
import client from './apollo/client';
import './index.css';

// Import createRoot from 'react-dom/client' instead of 'react-dom'
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root') ?? document.createElement('div');

// Use createRoot from 'react-dom/client'
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);
