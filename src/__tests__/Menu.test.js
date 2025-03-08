import { render, screen } from '@testing-library/react';
import Menu from '../pages/Menu';

test('renders menu items', () => {
  render(<Menu />);
  expect(screen.getByText(/Our Menu/i)).toBeInTheDocument();
});