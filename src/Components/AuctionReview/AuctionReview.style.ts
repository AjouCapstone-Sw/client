import styled from 'styled-components';

const Container = styled.li`
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 20px 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;

  cursor: pointer;

  pre {
    white-space: pre-wrap;
    overflow: hidden;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    > span {
      min-width: calc(100% - 120px);
      width: 170px;
      overflow: hidden;
    }

    div {
      min-width: 100px;
      text-align: center;
      span {
        display: block;
        font-size: 14px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default { Container };
