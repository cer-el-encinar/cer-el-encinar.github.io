import styled from 'styled-components';

type Props = {
  notMarginTopOnMobile?: boolean;
};

export const StyledHero = styled.div<Props>`
  font-size: 2rem;
  margin: 12rem 0;
  @media screen and (max-width: 980px) {
    & {
      margin: ${({ notMarginTopOnMobile }) =>
        notMarginTopOnMobile ? '1rem 0 6rem' : '6rem 0'};
    }
  }
`;
