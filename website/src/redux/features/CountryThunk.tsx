import customFetch from '../../lib/axios';
import {
  mapBorderCountries,
  mapCountry,
  mapCountryDetails,
} from '../../utils/mapData';

export const getDefaultCountriesThunk = async (_: void, thunkAPI: any) => {
  try {
    const resp = await customFetch.get('/alpha?codes=DE,US,BR,IS,AF,AX,AL,DZ');
    const countries = mapCountry(resp.data);

    return countries;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};

export const getCountriesByRegionThunk = async (
  { region }: any,
  thunkAPI: any
) => {
  try {
    const resp = await customFetch.get(
      `/region/${region.trim().toLowerCase()}`
    );
    const countries = mapCountry(resp.data);
    return countries;
  } catch (error: any) {
    if (error.response.status == 404) {
      return thunkAPI.rejectWithValue('No countries found...');
    }
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};

export const searchCountriesThunk = async ({ search }: any, thunkAPI: any) => {
  try {
    const resp = await customFetch.get(`/name/${search.trim().toLowerCase()}`);
    const countries = mapCountry(resp.data);
    return countries;
  } catch (error: any) {
    if (error.response.status == 404) {
      return thunkAPI.rejectWithValue('No countries found...');
    }
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};

export const getCountryDetailsThunk = async (
  { countryCode }: any,
  thunkAPI: any
) => {
  try {
    const countryResp = await customFetch.get(
      `/alpha/${countryCode.trim().toLowerCase()}`
    );
    const country = mapCountryDetails(countryResp.data[0]);

    if (country.borderCountries) {
      const borderCountriesResp = await customFetch.get(
        `/alpha?codes=${country.borderCountries}`
      );

      const borderCountries = mapBorderCountries(borderCountriesResp.data);
      country.borderCountries = borderCountries;
    }
    return country;
  } catch (error: any) {
    if (error.response.status == 404 || error.response.status == 400) {
      return thunkAPI.rejectWithValue('Country not found...');
    }
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};
