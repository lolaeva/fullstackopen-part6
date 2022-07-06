import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action) {
      state = action.payload;
      return state
    },
    removeNotification(state) {
      state = "";
      return state
    }
  }
})

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
