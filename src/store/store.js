import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservationSlice';
import menuReducer from './menuSlice'

const store = configureStore({
  reducer: {
    menu: menuReducer,
    reservations: reservationsReducer,
  },
});

export default store;