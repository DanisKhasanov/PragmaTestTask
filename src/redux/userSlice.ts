import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAdmin: boolean;
}

const initialState: UserState = {
  isAdmin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAdmin(state, action: PayloadAction<boolean>) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setUserAdmin } = userSlice.actions;

export default userSlice.reducer;
