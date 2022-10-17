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
`;

Button.defaultProps = {
  radius: false,
};
