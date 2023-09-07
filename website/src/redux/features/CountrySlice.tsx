import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCountriesByRegionThunk,
  getDefaultCountriesThunk,
} from './CountryThunk';

const initialState: any = {
  isLoading: true,
  error: '',
  search: '',
  region: '',
  countries: [],
  countryDetails: {},
};

export const getDefaultCountries = createAsyncThunk(
  'country/getDefaultCountries',
  getDefaultCountriesThunk
);

export const getCountriesByRegion = createAsyncThunk(
  'country/getCountriesByRegion',
  getCountriesByRegionThunk
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDefaultCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDefaultCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.isLoading = false;
      })
      .addCase(getDefaultCountries.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getCountriesByRegion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountriesByRegion.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.isLoading = false;
      })
      .addCase(getCountriesByRegion.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const {} = countrySlice.actions;

export default countrySlice.reducer;
