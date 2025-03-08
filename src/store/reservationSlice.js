import { createSlice } from '@reduxjs/toolkit';

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
export default reservationsSlice.reducer;