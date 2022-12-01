import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.color.border};

  .charge {
    color: ${({ theme }) => theme.color.primary};
  }
  .use {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export default {
  Container,
};
