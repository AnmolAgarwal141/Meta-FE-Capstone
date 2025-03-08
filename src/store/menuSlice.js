import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch menu data
export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data.menu;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;