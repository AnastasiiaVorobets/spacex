import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import store from './store/store';
import client from './apollo/client';
import { GlobalStyles } from './globalStyles';

const root = document.getElementById('root') ?? document.createElement('div') as HTMLElement;

const reactRoot = createRoot(root);

reactRoot.render(
  <React.Fragment>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.Fragment>,
);

