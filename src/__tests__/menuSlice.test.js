import menuReducer, { fetchMenu } from '../store/menuSlice';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

describe('menuSlice reducer', () => {
  it('should handle initial state', () => {
    expect(menuReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle fetchMenu.pending', () => {
    const nextState = menuReducer(initialState, { type: fetchMenu.pending.type });
    expect(nextState.status).toBe('loading');
    expect(nextState.error).toBeNull();
  });

  it('should handle fetchMenu.fulfilled', () => {
    const mockMenu = [
      { id: 1, name: 'Pizza', price: '$10.99', images: 'pizza.jpg' },
      { id: 2, name: 'Pasta', price: '$8.99', images: 'pasta.jpg' },
    ];

    const nextState = menuReducer(initialState, {
      type: fetchMenu.fulfilled.type,
      payload: mockMenu,
    });

    expect(nextState.status).toBe('succeeded');
    expect(nextState.items).toEqual(mockMenu);
  });

  it('should handle fetchMenu.rejected', () => {
    const error = 'Failed to fetch menu';
    const nextState = menuReducer(initialState, {
      type: fetchMenu.rejected.type,
      error: { message: error },
    });

    expect(nextState.status).toBe('failed');
    expect(nextState.error).toBe(error);
  });
});
