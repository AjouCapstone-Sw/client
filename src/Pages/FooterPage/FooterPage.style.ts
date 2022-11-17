import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => theme.mediaQuery.mobile} {
    margin-bottom: 90px;
  }
`;

export default { Container };
