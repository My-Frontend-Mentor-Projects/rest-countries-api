import { styled } from 'styled-components';
import { device } from '../assets/breakpoints';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { useSearchCountry } from '../hooks/useSearchCountry';

interface Props {
  placeholder: string;
}

const Search = ({ placeholder }: Props) => {
  const { isLoading, search, handleSearchValue } = useSearchCountry();

  return (
    <SearchWrapper>
      <RxMagnifyingGlass className='search-icon' />
      <input
        type='text'
        placeholder={placeholder}
        disabled={isLoading}
        value={search}
        onChange={handleSearchValue}
      />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 685px;
  position: relative;

  .search-icon {
    position: absolute;
    color: ${({ theme }) => theme.inputPlaceholder};
    font-size: 23px;
    top: 16px;
    left: 30px;
  }

  input {
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.text};
    height: 55px;
    width: 100%;
    border: 0;
    padding: 0 20px 0 70px;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    @media ${device.lg} {
      font-size: 16px;
    }

    &::placeholder {
      color: ${({ theme }) => theme.inputPlaceholder};

      @media ${device.lg} {
        font-size: 16px;
      }
    }
  }
`;

export default Search;
