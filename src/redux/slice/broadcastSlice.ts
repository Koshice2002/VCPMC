import { IBroadcast } from "../../types";
import { getIBroadcast } from "../actions/broadcastAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const broadcastFetchData = createAsyncThunk(
  'broadcast/fetchData',
  async () => {
    const result = await getIBroadcast() as IBroadcast[]
    return result; 
  }
);

export interface BroadcastState {
  broadcast: IBroadcast[]
  loading: boolean
  searchQuery: string
}

const initialState: BroadcastState = {
  broadcast: [],
  loading: false,
  searchQuery: ''
}

const broadcastSlice = createSlice({
  name: 'broadcast',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IBroadcast>) => {
      state.broadcast.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(broadcastFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(broadcastFetchData.fulfilled, (state, action: PayloadAction<IBroadcast[]>) => {
        state.broadcast = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('broadcast/setSearchQuery');

export const { create } = broadcastSlice.actions;

export default broadcastSlice.reducer