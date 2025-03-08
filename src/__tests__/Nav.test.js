import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { MemoryRouter } from 'react-router-dom';

test('renders navigation links', () => {
  render(<MemoryRouter><Nav/></MemoryRouter>);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});