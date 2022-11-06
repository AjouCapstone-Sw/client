import styled from 'styled-components';

type ButtonProp = {
  radius?: boolean;
};

export const Button = styled.button<ButtonProp>`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.base};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 19px;
  cursor: pointer;
  ${({ radius }) => radius && 'border-radius: 100px;'}
  opacity:.95;
  &:hover {
    opacity: 1;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: ${({ theme }) => theme.color.gray};
    color: ${({ theme }) => theme.color.dark};
    opacity: 1;
    &:hover {
      cursor: inherit;
    }
  }
`;

Button.defaultProps = {
  radius: false,
};
