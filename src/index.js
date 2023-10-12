import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/normalize.scss';
import './styles/global.scss';
import SplashScreen from './components/pages/SplashScreen/SplashScreen'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <SplashScreen />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
}, 3000);