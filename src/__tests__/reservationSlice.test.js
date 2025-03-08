import reservationsReducer, { addReservation } from '../store/reservationSlice';

describe('reservationsSlice', () => {
  test('should return the initial state', () => {
    const initialState = [];
    expect(reservationsReducer(undefined, {})).toEqual(initialState);
  });

  test('should add a reservation', () => {
    const initialState = [];
    const newReservation = { name: 'John Doe', date: '2025-03-10', time: '19:00', guests: 4 };

    const nextState = reservationsReducer(initialState, addReservation(newReservation));

    expect(nextState).toHaveLength(1);
    expect(nextState[0]).toEqual(newReservation);
  });
});