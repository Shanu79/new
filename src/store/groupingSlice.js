// groupingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const groupingSlice = createSlice({
  name: 'grouping',
  initialState: 'status', // Default grouping value
  reducers: {
    setGrouping: (state, action) => action.payload,
  },
});

export const { setGrouping } = groupingSlice.actions;
export default groupingSlice.reducer;
