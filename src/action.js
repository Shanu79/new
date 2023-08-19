// Action types
export const SET_SELECTED_GROUPING = "SET_SELECTED_GROUPING";

// Action creators
export const setSelectedGrouping = (selectedGrouping) => {
  return {
    type: SET_SELECTED_GROUPING,
    payload: selectedGrouping,
  };
};
