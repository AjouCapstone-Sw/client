import styled from 'styled-components';

const FooterContainer = styled.div`
  display: none;
  background-color: #bdc5cd;

  justify-content: center;
  align-items: center;
  height: 85px;
  width: 100%;
  position: fixed;
  bottom: 0;

  ${({ theme }) => theme.mediaQuery.mobile} {
    display: flex;
  }

  a {
    cursor: pointer;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .select path {
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;

export default { FooterContainer };
