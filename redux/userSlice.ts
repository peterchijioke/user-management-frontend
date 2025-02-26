import { fetchUsers, fetchUser, createUser, updateUser, deleteUser } from '@/services/user.service';
import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as User[],
    currentUser: null as User | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message??'Failed to fetch users';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.users[index] = action.payload;
        state.currentUser = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
        state.currentUser = null;
      });
  },
});

export default userSlice.reducer;