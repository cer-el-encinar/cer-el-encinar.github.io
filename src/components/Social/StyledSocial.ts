import styled from 'styled-components';

type Props = {
  $inFooter: boolean;
};

export const StyledSocial = styled.div<Props>`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3rem;
    margin: 1rem 2rem;
  }
  ${({ $inFooter }) => ($inFooter ? '' : 'margin-bottom: 8rem;')}
`;
