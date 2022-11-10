import styled from 'styled-components';

const MenuModalContainer = styled.div`
  display: none;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  margin-top: 90px;
  width: 100%;
  z-index: 100;
  min-width: 340px;

  &::before {
    display: block;
    content: '';
    border: 0.5px solid ${({ theme }) => theme.color.gray};
  }
  .select {
    color: ${({ theme }) => theme.color.primary};
  }
  a {
    display: inline-block;
    padding: 20px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontWeight.base};
    &:hover {
      background-color: ${({ theme }) => theme.color.gray};
    }
  }

  @media ${({ theme }) => theme.mediaQuery.base} {
    display: flex;
  }
`;

export default {
  MenuModalContainer,
};
