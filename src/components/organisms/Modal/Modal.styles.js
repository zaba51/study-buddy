import styled from 'styled-components';
import ReactModal from 'react-modal'

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  &:focus {
    outline: none;
`;

export const ModalBackground = styled.div`
  ::before {
    display: ${({ hasBlur}) => hasBlur ? "block" : "none"};
    content: '';
    opacity: 0.5;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;