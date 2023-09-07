import { configureStore } from '@reduxjs/toolkit';
import CountrySlice from './features/CountrySlice';

export const store = configureStore({
  reducer: {
    country: CountrySlice,
  },
});

// Redux ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
