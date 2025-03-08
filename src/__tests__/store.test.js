import store, { addReservation } from '../store';

let testStore;
beforeEach(() => {
  testStore = store;
});

test('should add a reservation', () => {
  const reservation = { name: 'John Doe', guests: 4, date: '2025-03-10', time: '19:00' };
  testStore.dispatch(addReservation(reservation));
  const state = testStore.getState().reservations;
  expect(state).toContainEqual(reservation);
});
