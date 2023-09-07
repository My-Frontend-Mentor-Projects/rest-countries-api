import { styled } from 'styled-components';

const Loader = () => {
  return <LoaderWrapper />;
};

const LoaderWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.text};
  border-top: 4px solid ${({ theme }) => theme.body};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40%;

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
