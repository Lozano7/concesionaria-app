import { configureStore } from '@reduxjs/toolkit';
import { processBuyReducer } from './slices/processBuySlice';
import { userAuthReducer } from './slices/userSlice';
import { vehicleSelectSliceReducer } from './slices/vehicleSeletedSlice';

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    processByVehicle: processBuyReducer,
    vehicleSelected: vehicleSelectSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
