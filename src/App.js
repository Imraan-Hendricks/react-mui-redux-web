import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes/routes';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
