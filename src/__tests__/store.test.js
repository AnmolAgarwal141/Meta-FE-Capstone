import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';

describe('Redux Store', () => {
  test('should initialize with correct reducers', () => {
    const state = store.getState();
    expect(state).toHaveProperty('menu');
    expect(state).toHaveProperty('reservations');
  });

  test('should update reservations state', () => {
    store.dispatch({ type: 'reservations/addReservation', payload: { name: 'John Doe', guests: 4 } });
    const state = store.getState().reservations;
    expect(state).toContainEqual({ name: 'John Doe', guests: 4 });
  });

  test('should update menu state', () => {
    store.dispatch({ type: 'menu/fetchMenu/fulfilled', payload: [{ name: 'Burger', price: '$5.99' }] });
    const state = store.getState().menu.items;
    expect(state).toContainEqual({ name: 'Burger', price: '$5.99' });
  });
});