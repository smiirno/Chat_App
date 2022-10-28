import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'


const store = setupStore()
const persistor = persistStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();