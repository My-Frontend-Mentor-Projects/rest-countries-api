import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCountriesByRegionThunk,
  getCountryDetailsThunk,
  getDefaultCountriesThunk,
  searchCountriesThunk,
} from './CountryThunk';

const initialState: any = {
  isLoading: true,
  error: '',
  search: '',
  countries: [],
  countryDetails: null,
};

export const getDefaultCountries = createAsyncThunk(
  'country/getDefaultCountries',
  getDefaultCountriesThunk
);

export const getCountriesByRegion = createAsyncThunk(
  'country/getCountriesByRegion',
  getCountriesByRegionThunk
);

export const searchCountries = createAsyncThunk(
  'country/searchCountry',
  searchCountriesThunk
);

export const getCountryDetails = createAsyncThunk(
  'country/getCountryDetails',
  getCountryDetailsThunk
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    handleSearch: (state, { payload }) => {
      state.search = payload.search;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDefaultCountries.pending, (state) => {
        state.isLoading = true;
        state.search = '';
        state.error = '';
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
        state.search = '';
        state.error = '';
      })
      .addCase(getCountriesByRegion.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.isLoading = false;
      })
      .addCase(getCountriesByRegion.rejected, (state, { payload }) => {
        state.error = payload;
        state.countries = [];
        state.isLoading = false;
      })
      .addCase(searchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(searchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
        state.isLoading = false;
      })
      .addCase(searchCountries.rejected, (state, { payload }) => {
        state.error = payload;
        state.countries = [];
        state.isLoading = false;
      })
      .addCase(getCountryDetails.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getCountryDetails.fulfilled, (state, { payload }) => {
        state.countryDetails = payload;
        state.isLoading = false;
      })
      .addCase(getCountryDetails.rejected, (state, { payload }) => {
        state.error = payload;
        state.countryDetails = null;
        state.isLoading = false;
      });
  },
});

export const { handleSearch } = countrySlice.actions;

export default countrySlice.reducer;
