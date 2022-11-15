import styled from 'styled-components';

export const ErrorMsg = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.danger};
`;
