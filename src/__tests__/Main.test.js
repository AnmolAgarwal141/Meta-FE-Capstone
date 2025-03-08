import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../components/Main';

test('renders main component', () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
});