import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataStateContext } from '../../types/contex_interfaces/interfaces';

interface BasicInfo {
  name: string;
  imgURL: string;
  age: string;
  description: string[] | null;
}

interface VehicleSelectedToBy {
  basicInfo: BasicInfo;
  data: DataStateContext;
}

interface ProcessBuyState {
  processBuy: boolean;
  vehicleSelectedToBy: VehicleSelectedToBy;
  curretStep: number;
  stepsComplete: number[];
}

const initialState: ProcessBuyState = {
  processBuy: false,
  vehicleSelectedToBy: {
    basicInfo: {
      name: '',
      imgURL: '',
      age: '',
      description: null,
    },
    data: {
      price: 0,
      motor: {
        name: '',
        price: 0,
      },
      transmission: {
        name: '',
        price: 0,
      },
      traction: {
        name: '',
        price: 0,
      },
      packages: {
        name: '',
        price: 0,
      },
      accessories: [],
      color: '',
    },
  },
  stepsComplete: [],
  curretStep: 1,
};

const processBuy = createSlice({
  name: 'processBuy',
  initialState,
  reducers: {
    setActiveProcessBy: (state) => {
      state.processBuy = true;
    },
    setDesactiveProcessBy: (state) => {
      state.processBuy = false;
    },
    setCurretStep: (state, action: PayloadAction<number>) => {
      state.curretStep = action.payload;
    },
    setAddSteps: (state, action: PayloadAction<number>) => {
      state.stepsComplete = [...state.stepsComplete, action.payload];
    },
    setDeleteSteps: (state, action: PayloadAction<number>) => {
      const index = state.stepsComplete.indexOf(action.payload);
      state.stepsComplete.slice(index, 1);
      state.stepsComplete = state.stepsComplete.slice(0, index);
    },
    setVehicleSelectedToByBasicInfoNameImg: (
      state,
      action: PayloadAction<{ name: string; imgURL: string }>
    ) => {
      state.vehicleSelectedToBy.basicInfo.name = action.payload.name;
      state.vehicleSelectedToBy.basicInfo.imgURL = action.payload.imgURL;
    },
    setVehicleSelectedToByBasicAgeSpecifications: (
      state,
      action: PayloadAction<{ age: string; specifications: string[] }>
    ) => {
      state.vehicleSelectedToBy.basicInfo.age = action.payload.age;
      state.vehicleSelectedToBy.basicInfo.description =
        action.payload.specifications;
    },
    setVehicleDataCustom: (state, action: PayloadAction<DataStateContext>) => {
      state.vehicleSelectedToBy.data = action.payload;
    },
  },
});

export const { actions: processBuyActions, reducer: processBuyReducer } =
  processBuy;
