import customFetch from '../../lib/axios';
import { mapCountry } from '../../utils/mapData';

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
    const resp = await customFetch.get(`/region/${region.toLowerCase()}`);
    const countries = mapCountry(resp.data);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    return countries;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('Something went wrong, try again later...');
  }
};
