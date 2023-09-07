import { styled } from 'styled-components';

interface Props {
  msg: string;
}

const ErrorMsg = ({ msg }: Props) => {
  return (
    <ErrorMsgWrapper>
      <p>{msg}</p>
    </ErrorMsgWrapper>
  );
};

const ErrorMsgWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  p {
    font-size: 18px;
  }
`;

export default ErrorMsg;
