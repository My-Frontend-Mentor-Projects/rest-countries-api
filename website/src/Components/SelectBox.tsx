import { styled } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Region } from '../types';
import { useFilterRegion } from '../hooks/useFilterRegion';

interface Props {
  title: string;
  options: Region[];
}

const SelectBox = ({ title, options }: Props) => {
  const { showOptions, toggleShowOptions, selectRegion } = useFilterRegion();

  return (
    <SelectBoxWrapper>
      <div className='select-box' onClick={toggleShowOptions}>
        {title} <MdKeyboardArrowDown className='select-box-icon' />
      </div>
      {showOptions && (
        <div className='options'>
          <ul>
            {options.map((option) => {
              return (
                <li key={option} onClick={() => selectRegion(option)}>
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </SelectBoxWrapper>
  );
};

const SelectBoxWrapper = styled.div`
  width: 220px;
  user-select: none;
  position: relative;

  .select-box {
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.text};
    height: 55px;
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 30px;
    border-radius: 5px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    cursor: pointer;

    .select-box-icon {
      font-size: 16px;
    }
  }

  .options {
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.text};
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    z-index: 2;
    width: inherit;

    ul {
      text-align: left;
      font-size: 14px;
      padding: 20px 0px;

      li {
        padding-left: 30px;
      }

      li:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`;

export default SelectBox;
