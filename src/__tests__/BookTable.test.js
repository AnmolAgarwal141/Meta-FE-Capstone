import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import BookTable from '../pages/BookTable';

test('displays success message on successful reservation', () => {
  render(
    <Provider store={store}>
      <BookTable />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Jane Doe' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-03-10' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
  fireEvent.click(screen.getByText(/Book Now/i));

  expect(screen.getByText(/Table successfully booked/i)).toBeInTheDocument();
});
