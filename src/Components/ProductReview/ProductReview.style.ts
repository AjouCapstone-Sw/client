import styled from 'styled-components';

const Container = styled.li`
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 20px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  margin-left: 10px;
  width: calc(100vw - 100px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  pre {
    white-space: pre-wrap;
    overflow: hidden;
  }
`;

const ReviewInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    min-width: 100px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  > span {
    min-width: calc(100% - 120px);
    width: 50px;
    overflow: hidden;
  }
`;

export default { Container, TextContainer, ReviewInfoContainer };
