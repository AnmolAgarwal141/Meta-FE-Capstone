import { configureStore, createSlice } from '@reduxjs/toolkit';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [],
  reducers: {
    addReservation: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReservation } = reservationsSlice.actions;

const store = configureStore({
  reducer: {
    reservations: reservationsSlice.reducer,
  },
});

export default store;