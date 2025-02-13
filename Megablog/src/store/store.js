import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice'; // Import your authSlice reducer

const store = configureStore({
  reducer: {
    auth: authSlice, // Add the auth reducer
    // Add other reducers here
  }
});

export default store;