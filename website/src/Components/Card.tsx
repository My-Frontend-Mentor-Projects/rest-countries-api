import { styled } from 'styled-components';
import { device } from '../assets/breakpoints';

const Card = () => {
  return (
    <CardWrapper>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
        alt=''
      />
      <h3 className='name'>Germany</h3>
      <ul className='desc'>
        <li>
          <span className='text-bold'>Population:</span> 81,770,900
        </li>
        <li>
          <span className='text-bold'>Region:</span> Europe
        </li>
        <li>
          <span className='text-bold'>Capital:</span> Berlin
        </li>
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.inputBg};
  border-radius: 5px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  cursor: pointer;

  img {
    height: 45%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }

  .name {
    margin: 25px 0 20px 20px;
    font-size: 18px;
    font-weight: 800;
  }

  .desc {
    text-align: left;
    margin-left: 20px;
    font-size: 14px;

    @media ${device.lg} {
      font-size: 15px;
    }

    li:not(:last-child) {
      margin-bottom: 5px;

      @media ${device.lg} {
        margin-bottom: 8px;
      }
    }
  }

  .text-bold {
    font-weight: 600;
  }
`;

export default Card;
