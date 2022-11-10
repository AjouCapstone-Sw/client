import styled from 'styled-components';

const SearchModalContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};

  width: 100%;
  z-index: 10000;
  min-width: 340px;
`;

const SearchBar = styled.div`
  display: flex;
  min-width: 360px;
  width: 100%;
  form {
    padding: 0.9rem 1.2rem;
    margin-right: 30px;
    width: 100%;
    background-color: rgba(23, 23, 26, 0.1);

    border-radius: 5px;
  }

  input {
    color: ${({ theme }) => theme.color.dark};
    font-size: ${({ theme }) => theme.fontSize.m};
    background: none;
    width: inherit;

    &::placeholder {
      color: inherit;
    }
  }
  button {
    white-space: nowrap;
    background: none;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
  }
`;

export default {
  SearchModalContainer,
  SearchBar,
};
