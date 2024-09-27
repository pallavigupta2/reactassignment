import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userslice",
  initialState: {
    userData: [],
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
    deleteUserData: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
    },
    updateUserData: (state, action) => {
      const { id, updatedData } = action.payload;
      const userIndex = state.userData.findIndex((user) => user.id === id);
      state.userData[userIndex] = {
        ...state.userData[userIndex],
        ...updatedData,
      };
    },
  },
});

export const { addUserData, deleteUserData, updateUserData } =
  userSlice.actions;

export default userSlice.reducer;
