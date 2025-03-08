import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import App from '../App';

test('renders app without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});