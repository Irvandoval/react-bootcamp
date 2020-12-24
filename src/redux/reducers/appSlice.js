import { createSlice } from '@reduxjs/toolkit';

const appState = {
  profiles: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    setData: (state, action) => {
      state.profiles = action.payload;
    },

    addUser: (state, action) => {
      state.profiles.push(action.payload);
    },

    updateUser: (state, action) => {
      let profile = state.profiles.find(
        (profile) => profile.id === action.payload.id
      );
      if (profile) {
        profile = { ...profile, ...action.payload.data };
      }
    },

    removeUser: (state, action) => {
      const index = state.profiles.findIndex(
        (profile) => profile.id === action.payload
      );
      state.profiles.splice(index, 1);
    },
  },
});

export const { setData, addUser, updateUser, removeUser } = appSlice.actions;
export default appSlice;
