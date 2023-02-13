import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, reducer) {},
    removeUser(state, reducer) {},
    deleteUsers(state, reducer) {},
  },
});
console.log(userSlice);

export default userSlice.reducer;
