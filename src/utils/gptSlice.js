import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
    moviesNames: [],
    tmdbResults: null,
  },
  reducers: {
    showGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { moviesNames, tmdbResults } = action.payload;
      state.moviesNames = moviesNames;
      state.tmdbResults = tmdbResults;
    },
  },
});

export default gptSlice.reducer;

export const { showGptSearch, addGptMovieResults } = gptSlice.actions;
