import { IUser } from "../../types";
import { getIUsers } from "../actions/userAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userFetchData = createAsyncThunk(
  'users/fetchData',
  async () => {
    const result = await getIUsers() as IUser[]
    return result; 
  }
);

export interface UserState {
  users: IUser[]
  loading: boolean
  searchQuery: string
}

const initialState: UserState = {
  users: [],
  loading: false,
  searchQuery: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IUser>) => {
      state.users.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(userFetchData.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('user/setSearchQuery');

export const { create } = userSlice.actions;

export default userSlice.reducer