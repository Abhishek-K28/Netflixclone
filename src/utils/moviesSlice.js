import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowplayingmovies: null,
        trailervideo: null,
        PopularMovies: null,
    },
    reducers: {
        addmovies: (state , action) => {
            state.nowplayingmovies = action.payload
        },

        addPopularMovies: (state , action) => {
          state.PopularMovies = action.payload;  
        },

        addTrailer: (state, action) => {
           state.trailervideo= action.payload;
        },

    }
})

export default movieSlice.reducer;
export const {addmovies, addTrailer,addPopularMovies} = movieSlice.actions;