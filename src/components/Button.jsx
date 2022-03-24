import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  background: #f8049c;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: #f8049c;
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: black;
    `}

  ${({ size }) =>
    size === 'large'
      ? css`
          border-radius: 16px;
          font-size: 1.5rem;
          padding: 16px;
        `
      : css`
          border-radius: 4px;
          font-size: 1rem;
          padding: 8px;
        `}

  &:hover {
    background: orange;
    color: red;
  }
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
