import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders home page content', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to Little Lemon/i)).toBeInTheDocument();
});