import { IRole } from "../../types";
import { getIRoles } from "../actions/roleAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const roleFetchData = createAsyncThunk(
  'roles/fetchData',
  async () => {
    const result = await getIRoles() as IRole[]
    return result; 
  }
);

export interface RoleState {
  roles: IRole[]
  loading: boolean
  searchQuery: string
}

const initialState: RoleState = {
  roles: [],
  loading: false,
  searchQuery: ''
}

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IRole>) => {
      state.roles.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(roleFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(roleFetchData.fulfilled, (state, action: PayloadAction<IRole[]>) => {
        state.roles = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('role/setSearchQuery');

export const { create } = roleSlice.actions;

export default roleSlice.reducer