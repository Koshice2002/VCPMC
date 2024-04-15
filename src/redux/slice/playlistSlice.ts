import { IPlaylist } from "../../types";
import { getIPlaylist } from "../actions/playlistAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const playlistFetchData = createAsyncThunk(
  'playlist/fetchData',
  async () => {
    const result = await getIPlaylist() as IPlaylist[]
    return result; 
  }
);

export interface PlaylistState {
  playlist: IPlaylist[]
  loading: boolean
  searchQuery: string
}

const initialState: PlaylistState = {
  playlist: [],
  loading: false,
  searchQuery: ''
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IPlaylist>) => {
      state.playlist.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(playlistFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(playlistFetchData.fulfilled, (state, action: PayloadAction<IPlaylist[]>) => {
        state.playlist = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('playlist/setSearchQuery');

export const { create } = playlistSlice.actions;

export default playlistSlice.reducer