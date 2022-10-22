import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #bdc5cd;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  width: 100%;
  position: fixed;
  bottom: 0;

  a {
    cursor: pointer;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .select path {
      fill: #5db075;
    }
  }
`;

export default { FooterContainer };
