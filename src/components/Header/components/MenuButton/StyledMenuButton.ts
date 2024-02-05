import styled, { css } from 'styled-components';

export const StyledMenuButtonContainer = styled.div`
  display: none;
  height: 60px;
  width: 60px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 820px) {
    & {
      display: inline-block;
    }
  }
`;

type Props = {
  isOpen?: boolean;
};

export const StyledMenuButton = styled.div<Props>`
  &,
  &::before,
  &::after {
    display: block;
    background-color: #007ea7;
    position: absolute;
    height: 4px;
    width: 60px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    margin-top: 30px;
  }

  &::before {
    content: '';
    margin-top: -16px;
  }

  &::after {
    content: '';
    margin-top: 16px;
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          &::before {
            margin-top: 0px;
            transform: rotate(405deg);
          }

          & {
            background: rgba(255, 255, 255, 0);
          }

          &::after {
            margin-top: 0px;
            transform: rotate(-405deg);
          }
        `
      : ''}
`;
