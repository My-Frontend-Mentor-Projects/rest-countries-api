import { styled } from 'styled-components';
import { device } from '../assets/breakpoints';
import { HiOutlineMoon } from 'react-icons/hi';

const ToggleTheme = () => {
  return (
    <ToggleThemeWrapper onClick={() => console.log('hola')}>
      <HiOutlineMoon className='icon' />
      <p>Dark Mode</p>
    </ToggleThemeWrapper>
  );
};

const ToggleThemeWrapper = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 5px;
  user-select: none;
  cursor: pointer;

  p {
    font-size: 14px;

    @media ${device.md} {
      font-size: 16px;
    }
  }

  .icon {
    position: relative;
    top: 2px;

    @media ${device.md} {
      font-size: 18px !important;
      top: 0;
    }
  }
`;

export default ToggleTheme;
