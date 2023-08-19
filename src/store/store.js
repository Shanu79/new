import { configureStore } from '@reduxjs/toolkit';
import groupingReducer from './groupingSlice'; // Import your grouping reducer

const store = configureStore({
  reducer: {
    grouping: groupingReducer,
    // Add other reducers here
  },
  // Other configurations if needed
});

export default store;
