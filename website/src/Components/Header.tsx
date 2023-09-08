import { styled } from 'styled-components';
import ToggleTheme from './ToggleTheme';

interface Props {
  themeToggler: () => void;
}

const Header = ({ themeToggler }: Props) => {
  return (
    <HeaderWrapper>
      <div className='main-container'>
        <h1>Where in the World?</h1>
        <ToggleTheme themeToggler={themeToggler} />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 3px 0px;

  div {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  span {
    display: flex;
    gap: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
  }

  .toggle-icon {
    color: ${({ theme }) => theme.text};
    position: relative;
    top: 2px;
  }
`;

export default Header;
