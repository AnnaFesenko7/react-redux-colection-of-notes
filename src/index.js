import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading="...Loading" persistor={persistor}> */}
      <BrowserRouter basename="/react-redux-colection-of-notes/">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
