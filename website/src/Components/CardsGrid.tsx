import { styled } from 'styled-components';
import { device } from '../assets/breakpoints';
import Card from './Card';

const CardsGrid = () => {
  return (
    <CardsGridWrapper className='main-container'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsGridWrapper>
  );
};

const CardsGridWrapper = styled.section`
  min-height: 65vh;
  display: grid;
  grid-template-columns: 265px;
  grid-auto-rows: 338px;
  grid-gap: 35px;
  justify-content: center;
  padding-bottom: 15vh;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 265px);
    grid-gap: 30px;
  }

  @media ${device.md} {
    grid-template-columns: repeat(3, 265px);
    grid-gap: 40px;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
    justify-content: flex-start;
    margin-top: 45px;
  }
`;

export default CardsGrid;
