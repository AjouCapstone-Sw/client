import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: auto;
  max-width: 650px;
  width: 90%;
  overflow-y: scroll;

  #product-category {
    div {
      min-width: 0px;
    }
  }
  div,
  input,
  textarea {
    min-width: 360px;
  }
  form {
    margin-top: 48px;
    input[type='file'] {
      display: none;
    }
    label {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-top: 32px;
      margin-bottom: 16px;
    }
  }
  .date-time-picker {
    width: 100%;
    button {
      position: relative;
      left: -200px;
    }
  }
  .register-button-container {
    display: flex;
    margin-top: 40px;
    button:first-child {
      width: 30%;
      margin-right: 10px;
      background-color: ${({ theme }) => theme.color.danger};
    }
  }
  .register-sldier-label + span {
    width: 90%;
    margin: 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;

  svg {
    width: 30%;
    min-width: 120px;
    opacity: 0.7;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
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

export default { Container, ImageContainer, TextArea };
