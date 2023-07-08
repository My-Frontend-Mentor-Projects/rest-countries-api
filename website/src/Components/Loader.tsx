import { styled } from 'styled-components';
import { palette } from '../assets/colors';

const Loader = () => {
  return <LoaderWrapper></LoaderWrapper>;
};

const LoaderWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.text};
  border-top: 4px solid ${({ theme }) => theme.body};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
