import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getCountriesByRegion } from '../redux/features/CountrySlice';

export const useFilterRegion = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { isLoading } = useAppSelector((store) => store.country);
  const dispatch = useAppDispatch();

  const toggleShowOptions = () => {
    if (isLoading) return;
    setShowOptions(!showOptions);
  };

  const selectRegion = async (region: string) => {
    dispatch(getCountriesByRegion({ region }));
    toggleShowOptions();
  };

  return {
    showOptions,
    toggleShowOptions,
    selectRegion,
  };
};
