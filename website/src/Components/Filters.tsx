import { styled } from 'styled-components';
import Search from './Search';
import SelectBox from './SelectBox';
import { device } from '../assets/breakpoints';
import { Region } from '../types';

const regions: Array<Region> = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
];

const Filters = () => {
  return (
    <FiltersWrapper className='main-container'>
      <Search placeholder='Search for a country...' />
      <SelectBox title='Filter by Region...' options={regions} />
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding-top: 35px;
  padding-bottom: 35px;
  gap: 40px;

  @media ${device.lg} {
    flex-flow: row;
    justify-content: space-between;
    padding-top: 45px;
    padding-bottom: 45px;
  }
`;

export default Filters;
