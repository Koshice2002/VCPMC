import { IAuthorizedContract } from "../../types";
import { getIAuthorizedContracts } from "../actions/authorizedContractAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authorizedContractFetchData = createAsyncThunk(
  'contracts/fetchData',
  async () => {
    const result = await getIAuthorizedContracts() as IAuthorizedContract[]
    return result; 
  }
);

export interface authorizedContractState {
  authorizedContracts: IAuthorizedContract[]
  loading: boolean
  searchQuery: string
}

const initialState: authorizedContractState = {
  authorizedContracts: [],
  loading: false,
  searchQuery: ''
}

const authorizedContractSlice = createSlice({
  name: 'authorized-contract',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IAuthorizedContract>) => {
      state.authorizedContracts.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizedContractFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(authorizedContractFetchData.fulfilled, (state, action: PayloadAction<IAuthorizedContract[]>) => {
        state.authorizedContracts = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
          (item.number && item.number.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('contract/setSearchQuery');

export const { create } = authorizedContractSlice.actions;

export default authorizedContractSlice.reducer