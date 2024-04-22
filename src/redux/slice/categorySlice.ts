import { ICategory } from "../../types";
import { getICategorys } from "../actions/categoryAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const categoryFetchData = createAsyncThunk(
  'categorys/fetchData',
  async () => {
    const result = await getICategorys() as ICategory[]
    return result; 
  }
);

export interface CategoryState {
  categorys: ICategory[]
  loading: boolean
  searchQuery: string
}

const initialState: CategoryState = {
  categorys: [],
  loading: false,
  searchQuery: ''
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<ICategory>) => {
      state.categorys.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(categoryFetchData.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
        state.categorys = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('category/setSearchQuery');

export const { create } = categorySlice.actions;

export default categorySlice.reducer