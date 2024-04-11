import { IAuthorizedSong } from "../../types";
import { getIAuthorizedSongs } from "../actions/songAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const songFetchData = createAsyncThunk(
  'songs/fetchData',
  async () => {
    const result = await getIAuthorizedSongs() as IAuthorizedSong[]
    return result; 
  }
);

export interface SongState {
  songs: IAuthorizedSong[]
  loading: boolean
  searchQuery: string
}

const initialState: SongState = {
  songs: [],
  loading: false,
  searchQuery: ''
}

const songSlice = createSlice({
  name: 'authorized-song',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IAuthorizedSong>) => {
      state.songs.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(songFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(songFetchData.fulfilled, (state, action: PayloadAction<IAuthorizedSong[]>) => {
        state.songs = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
          (item.singer && item.singer.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('song/setSearchQuery');

export const { create } = songSlice.actions;

export default songSlice.reducer