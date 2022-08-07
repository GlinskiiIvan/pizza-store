import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import {store} from "./redux/store";

import App from './App';

import {StoreContextProvider} from "./context/StoreContext";

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <StoreContextProvider>
              <App />
          </StoreContextProvider>
      </Provider>
  </React.StrictMode>
);
