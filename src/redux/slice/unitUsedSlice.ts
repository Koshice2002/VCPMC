import { IUnitUsed } from "../../types";
import { getIUnitUsed } from "../actions/unitUsedAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const unitUsedFetchData = createAsyncThunk(
  'unitUsed/fetchData',
  async () => {
    const result = await getIUnitUsed() as IUnitUsed[]
    return result; 
  }
);

export interface UnitUsedState {
  unitUsed: IUnitUsed[]
  loading: boolean
  searchQuery: string
}

const initialState: UnitUsedState = {
  unitUsed: [],
  loading: false,
  searchQuery: ''
}

const unitUsedSlice = createSlice({
  name: 'unit-used',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IUnitUsed>) => {
      state.unitUsed.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(unitUsedFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(unitUsedFetchData.fulfilled, (state, action: PayloadAction<IUnitUsed[]>) => {
        state.unitUsed = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('unitUsed/setSearchQuery');

export const { create } = unitUsedSlice.actions;

export default unitUsedSlice.reducer