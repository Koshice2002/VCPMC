import { IDevice } from "../../types";
import { getIDevices } from "../actions/deviceAction";
import { createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const deviceFetchData = createAsyncThunk(
  'devices/fetchData',
  async () => {
    const result = await getIDevices() as IDevice[]
    return result; 
  }
);

export interface DeviceState {
  devices: IDevice[]
  loading: boolean
  searchQuery: string
}

const initialState: DeviceState = {
  devices: [],
  loading: false,
  searchQuery: ''
}

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    create:( state, action: PayloadAction<IDevice>) => {
      state.devices.unshift(action.payload)
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(deviceFetchData.pending, (state) => {
        state.loading = true;
        console.log('Pending');
      })
      .addCase(setSearchQuery, (state, action: PayloadAction<string>) => {
        state.searchQuery = action.payload;
      })
      .addCase(deviceFetchData.fulfilled, (state, action: PayloadAction<IDevice[]>) => {
        state.devices = action.payload.filter(item => 
          (item.name && item.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        );
        console.log('Fulfilled');
        state.loading = false;
      })
    }
})

export const setSearchQuery = createAction<string>('device/setSearchQuery');

export const { create } = deviceSlice.actions;

export default deviceSlice.reducer