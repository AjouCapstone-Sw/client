import styled from 'styled-components';

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  label {
    display: block;
    margin: 16px 0px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
`;

const TextArea = styled.textarea`
  display: block;
  background-color: #f6f6f6;
  width: 100%;
  height: 150px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  resize: vertical;

  &:focus-visible {
    outline: none;
  }
`;
export default {
  Container,
  ButtonContainer,
  TextArea,
};
