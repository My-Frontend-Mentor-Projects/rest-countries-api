import { styled } from 'styled-components';
import { BackButton } from '.';
import { device } from '../assets/breakpoints';

const CountryDetails = () => {
  return (
    <CountryDetailsWrapper className='main-container'>
      <div className='btn-container'>
        <BackButton />
      </div>
      <img
        className='flag'
        src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
        alt=''
      />
      <div className='details'>
        <h2 className='title'>Belgium</h2>
        <ul className='details-1'>
          <li>
            <span className='field-name'>Native Name:</span> Belgie
          </li>
          <li>
            <span className='field-name'>Population:</span> 11,319,511
          </li>
          <li>
            <span className='field-name'>Region:</span> Europe
          </li>
          <li>
            <span className='field-name'>Sub Region:</span> Western Europe
          </li>
          <li>
            <span className='field-name'>Capital:</span> Brussels
          </li>
        </ul>

        <ul className='details-2'>
          <li>
            <span className='field-name'>Top Level Domain:</span> .be
          </li>
          <li>
            <span className='field-name'>Currencies:</span> Euro
          </li>
          <li>
            <span className='field-name'>Language:</span> Dutch, French, German
          </li>
        </ul>
      </div>
      <div className='border-countries'>
        <h3 className='title'>Border Countries:</h3>
        <div className='items'>
          <a>France</a>
          <a>Germany</a>
          <a>Netherlands</a>
          <a>France</a>
          <a>Germany</a>
          <a>Netherlands</a>
        </div>
      </div>
    </CountryDetailsWrapper>
  );
};

const CountryDetailsWrapper = styled.section`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;
  padding-top: 50px;
  padding-bottom: 50px;

  @media ${device.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(40px, auto) repeat(2, 1fr);
    grid-column-gap: 120px;
  }

  .btn-container {
    @media ${device.lg} {
      grid-column: 1 / 3;
      padding-top: 20px;
      padding-bottom: 40px;
    }
  }

  .field-name {
    font-weight: 600;
  }

  .flag {
    min-height: 200px;
    width: 100%;
    object-fit: cover;
    max-width: 560px;
    margin: 0 auto;

    @media ${device.lg} {
      height: 380px;
      grid-row: 2 / 4;
      margin: 0;
    }
  }

  .details {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    gap: 30px;

    @media ${device.sm} {
      flex-flow: row wrap;
    }

    @media ${device.md} {
      justify-content: center;
    }

    @media ${device.lg} {
      justify-content: space-between;
      margin-top: 40px;
    }

    h2 {
      text-align: left;
      width: 100%;

      @media ${device.md} {
        text-align: center;
      }

      @media ${device.lg} {
        text-align: left;
      }
    }

    .details-1,
    .details-2 {
      text-align: left;

      li:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  .border-countries {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    @media ${device.md} {
      align-items: center;
    }

    @media ${device.lg} {
      align-items: flex-start;
      grid-column: 2 / 3;
      flex-flow: row;
      gap: 15px;

      h3 {
        font-size: 16px;
        white-space: nowrap;
      }
    }

    .items {
      display: flex;
      flex-flow: row wrap;
      gap: 10px;
      width: 100%;

      @media ${device.md} {
        justify-content: center;
      }

      @media ${device.lg} {
        justify-content: flex-start;
      }

      a {
        font-size: 14px;
        background: ${({ theme }) => theme.inputBg};
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
        padding: 3px 20px;
        border-radius: 3px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
`;

export default CountryDetails;
