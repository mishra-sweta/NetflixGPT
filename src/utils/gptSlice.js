import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    showGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});

export default gptSlice.reducer;

export const { showGptSearch } = gptSlice.actions;
