import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action) {
      state = action.payload;
      return state;
    },
    clearNotification(state) {
      state = "";
      return state;
    },
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;

export const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch(addNotification(notification))
    setTimeout(()=>{
      dispatch(clearNotification())
    }, time*1000)
  }
}
export default notificationSlice.reducer;
