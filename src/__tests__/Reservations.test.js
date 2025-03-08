import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Reservations from '../pages/Reservations';

test('displays no reservations message when list is empty', () => {
  render(
    <Provider store={store}>
      <Reservations />
    </Provider>
  );

  expect(screen.getByText(/No reservations made yet/i)).toBeInTheDocument();
});