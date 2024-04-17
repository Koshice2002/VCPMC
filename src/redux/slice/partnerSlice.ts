import { IPartner } from "../../types";
import { getIPartners } from "../actions/partnerAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const partnerFetchData = createAsyncThunk(
  'partners/fetchData',
  async () => {
    const result = await getIPartners() as IPartner[]
    return result; 
  }
);

export interface PartnerState {
  partners: IPartner[]
  loading: boolean
  searchQuery: string
}

const initialState: PartnerState = {
  partners: [],
  loading: false,
  searchQuery: ''
}

const partnerSlice = createSlice({
  name: 'partner-authorized',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IPartner>) => {
      state.partners.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(partnerFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(partnerFetchData.fulfilled, (state, action: PayloadAction<IPartner[]>) => {
        state.partners = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('partner/setSearchQuery');

export const { create } = partnerSlice.actions;

export default partnerSlice.reducer