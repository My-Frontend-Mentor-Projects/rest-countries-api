import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { handleSearch, searchCountries } from '../redux/features/CountrySlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export const useSearchCountry = () => {
  const { isLoading, search } = useAppSelector((store) => store.country);
  const dispatch = useAppDispatch();
  const [debouncedValue] = useDebounce(search, 800);

  const handleSearchValue = (event: any) => {
    const search = event.target.value;
    dispatch(handleSearch({ search }));
  };

  useEffect(() => {
    if (debouncedValue.length > 0) {
      dispatch(searchCountries({ search: debouncedValue }));
    }
  }, [debouncedValue]);

  return {
    isLoading,
    search,
    handleSearchValue,
  };
};
