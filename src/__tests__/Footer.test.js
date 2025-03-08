import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

// Test to check if the footer renders correctly
test('renders the footer with the correct text and year', () => {
  render(<Footer />);

  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Little Lemon. All rights reserved.`;

  // Assert the footer text is present in the document
  expect(screen.getByText(footerText)).toBeInTheDocument();
});