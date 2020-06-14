import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import theme from './material-ui/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes/routes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Routes />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
