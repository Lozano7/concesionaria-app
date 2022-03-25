import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttributesDatum } from '../../types/api_types/interfaces';

const vehicleData: AttributesDatum = {} as AttributesDatum;

const vehicleSelectSlice = createSlice({
  name: 'vehicleSelected',
  initialState: {
    vehicleData,
  },
  reducers: {
    setVehicleSelected: (state, action: PayloadAction<AttributesDatum>) => {
      state.vehicleData = action.payload;
    },
  },
});

export const {
  actions: vehicleSelectSliceActions,
  reducer: vehicleSelectSliceReducer,
} = vehicleSelectSlice;
