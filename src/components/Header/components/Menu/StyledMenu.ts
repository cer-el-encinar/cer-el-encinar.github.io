import styled, { css } from 'styled-components';

type Props = {
  isOpen?: boolean;
  $hasScrolled?: boolean;
};

export const StyledMenu = styled.ul<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-item: none;
    display: inline-block;
    transition: transform 0.2s;
    font-size: 2rem;

    &.logo {
      .gatsby-image-wrapper {
        transition: transform 0.2s;
        ${({ $hasScrolled, isOpen }) =>
          ($hasScrolled || isOpen) &&
          css`
            transform: scale(0.5);
          `}
      }
    }
  }

  @media screen and (max-width: 820px) {
    .logo {
      display: none;
    }

    & {
      display: none;
      flex-direction: column;
      align-items: end;
      margin-bottom: 2rem;

      li a {
        font-size: 2.5rem;
        line-height: 5rem;
        padding: 2rem 0;
      }
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        & {
          display: flex;
        }
      `}
  }
`;
