import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders about page content', () => {
  render(<About />);
  expect(screen.getByText(/About Little Lemon/i)).toBeInTheDocument();
});