import styled, { css } from 'styled-components';

type Props = {
  $hasScrolled: boolean;
  isOpen?: boolean;
};

export const StyledHeader = styled.header<Props>`
  font-family: 'Kalam', sans-serif;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 100;
  transition: transform 0.2s;
  ${({ $hasScrolled, isOpen }) =>
    ($hasScrolled || isOpen) &&
    css`
      box-shadow: 0 0.2rem 0.5rem rgba(0, 126, 167, 0.3);
    `}
`;

export const StyledHeaderInner = styled.div<Props>`
  max-width: 980px;
  transition: transform 0.2s;

  margin: ${({ $hasScrolled }) => ($hasScrolled ? '0' : '2rem')} auto;
  @media screen and (max-width: 1024px) {
    & {
      margin: ${({ $hasScrolled }) => ($hasScrolled ? '0' : '2rem')} 2rem;
    }
  }
  @media screen and (max-width: 820px) {
    & {
      margin: 0 2rem;
    }
  }
`;

export const StyledHeaderMobile = styled.div`
  display: none;
  height: 128px;
  @media screen and (max-width: 820px) {
    display: flex;
  }
  align-items: center;
  justify-content: space-between;
`;
