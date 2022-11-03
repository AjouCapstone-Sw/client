import styled from 'styled-components';

type ButtonProp = {
  radius?: boolean;
};

export const Button = styled.button<ButtonProp>`
  width: 100%;
  height: 50px;
  background: #5db075;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  ${({ radius }) => radius && 'border-radius: 100px;'}
  opacity:.95;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    opacity: 1;
    &:hover {
      cursor: inherit;
    }
  }
`;

Button.defaultProps = {
  radius: false,
};
