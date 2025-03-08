import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Menu from '../pages/Menu';

describe('Menu Component', () => {

  test('displays menu items when loaded', async () => {
    const mockMenuItems = [
      { name: 'Pasta Primavera', price: '$12.99', images: 'pasta.jpg' },
      { name: 'Margherita Pizza', price: '$10.99', images: 'pizza.jpg' },
    ];

    store.dispatch({ type: 'menu/fetchMenu/fulfilled', payload: mockMenuItems });

    render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );

    expect(screen.getByText(/Pasta Primavera/i)).toBeInTheDocument();
    expect(screen.getByText(/Margherita Pizza/i)).toBeInTheDocument();
  });
});