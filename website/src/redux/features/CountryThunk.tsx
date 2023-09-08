import customFetch from '../../lib/axios';
import { mapCountry } from '../../utils/mapData';

export const getDefaultCountriesThunk = async (_: void, thunkAPI: any) => {
  try {
    const resp = await customFetch.get('/alpha?codes=DE,US,BR,IS,AF,AX,AL,DZ');
    const countries = mapCountry(resp.data);
    console.log(countries);
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
    console.log(resp.data);
    const countries = mapCountry(resp.data);
    return countries;
  } catch (error: any) {
    if (error.response.status == 404) {
      return thunkAPI.rejectWithValue('No countries found...');
    }
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};
