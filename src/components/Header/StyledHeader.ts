import styled, { css } from 'styled-components';

type Props = {
  $hasScrolled: boolean;
};

export const StyledHeader = styled.header<Props>`
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 100;
  transition: transform 0.2s;
  .gatsby-image-wrapper {
    transition: transform 0.2s;
  }
  ${({ $hasScrolled }) =>
    $hasScrolled &&
    css`
      box-shadow: 0 0.5rem 1rem rgba(0, 126, 167, 0.3);
      .gatsby-image-wrapper {
        transform: scale(0.5);
      }
    `}
`;

export const StyledHeaderInner = styled.div<Props>`
  width: 980px;
  transition: transform 0.2s;
  margin: ${({ $hasScrolled }) => ($hasScrolled ? '0' : '2rem')} auto;
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-item: none;
        display: inline-block;
        font-size: 2rem;
      }
    }
  }
`;
