import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // state.pop();
      // By using name
      // const deleteUser = action.payload;
      // state.splice(deleteUser, 1);
      // By using Id
      console.log(action.payload); // return id of user like 2
      // console.log(action.type); // return name of user like 2
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      console.log(action.payload);
    },
  },
});
// console.log(userSlice.actions.addUser());

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
