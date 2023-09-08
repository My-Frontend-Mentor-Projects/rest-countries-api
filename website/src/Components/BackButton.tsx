import { styled } from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <BackButtonWrapper onClick={goBack}>
      <BsArrowLeft className='back-icon' />
      Back
    </BackButtonWrapper>
  );
};

const BackButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 5px 25px;
  border-radius: 5px;
  max-width: 120px;
  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

  .back-icon {
    margin-right: 10px;
    font-size: 20px;
  }
`;

export default BackButton;
